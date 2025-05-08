'use client';
import React, {useEffect, useState } from 'react';
import { supabase } from '../api/supabase';
import { Plus, BadgeHelp, Pencil } from 'lucide-react';

type magazyn = {
    id: number;
    created_at: string;
    tytul: string;
    tom: number;
    kupiona_od: string;
    data_zakupu: string;
    cena_zakupu: number;
    czy_sprzedana: boolean;
    data_sprzedazy: number;
    cena_sprzedazy: number;
    kupujacy: number;
    uwagi: string;
    zdjecie: string;
};

export default function Page() {
    const [data, setData] = useState<magazyn[]>([]);
    const [formData, setFormData] = useState({
        tytul: '',
        tomstart: '',
        tomend: '',
        kupiona_od: '',
        date: '',
        cena: '',
        uwagi: '',
        zdjecie: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('mangi')
                .select('*')
                .order('created_at', { ascending: false });
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setData(data ?? []);
            }
        };
        fetchData();
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const start = parseInt(formData.tomstart);
        const end = parseInt(formData.tomend);

        const rekordy = [];

        if (!isNaN(end) && end > start) {
            for (let i = start; i <= end; i++) {
                rekordy.push({
                    tytul: formData.tytul || 'nie ma',
                    tom: i,
                    kupiona_od: formData.kupiona_od,
                    data_zakupu: formData.date,
                    cena_zakupu: parseFloat(formData.cena) || 0,
                    uwagi: formData.uwagi,
                    czy_sprzedana: false,
                    zdjecie: formData.zdjecie,
                });
            }
        } else {
            rekordy.push({
                tytul: formData.tytul || 'nie ma',
                tom: start,
                kupiona_od: formData.kupiona_od,
                data_zakupu: formData.date,
                cena_zakupu: parseFloat(formData.cena) || 0,
                uwagi: formData.uwagi,
                czy_sprzedana: false,
                zdjecie: formData.zdjecie,
            });
        }

        const { error } = await supabase.from('mangi').insert(rekordy);
        if (error) {
            alert('Błąd: ' + error.message);
        } else {
            alert('Dodano ' + rekordy.length + ' rekord(ów)');
            setFormData({
                tytul: '',
                tomstart: '',
                tomend: '',
                kupiona_od: '',
                date: '',
                cena: '',
                uwagi: '',
                zdjecie: '',
            });
        }
    };

    const [aktywnyFormularz, setAktywnyFormularz] = useState<string | null>(null);
    const [statusBazy, setStatusBazy] = useState<'magazyn' | 'sprzedane'>('magazyn');
    const zamknijFormularz = () => setAktywnyFormularz(null);


    //Sortowanie
    useEffect(() => {
        const sorted = [...data].sort((a, b) => b.id - a.id);
        setSortedData(sorted);
    }, [data]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof typeof data[0], direction: 'asc' | 'desc' } | null>(null);
    const [sortedData, setSortedData] = useState([...data]); // zakładam, że `data` pochodzi z propsów lub fetcha
    const sortBy = (key: keyof typeof data[0]) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sorted = [...sortedData].sort((a, b) => {
            const aVal = a[key];
            const bVal = b[key];

            if (typeof aVal === 'string' && typeof bVal === 'string') {
                return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            }

            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return direction === 'asc' ? aVal - bVal : bVal - aVal;
            }

            return 0;
        });

        setSortedData(sorted);
        setSortConfig({ key, direction });
    };
    // Filtrowanie ale z sortowanie
    const [searchText, setSearchText] = useState('');

    const filteredData = sortedData
        .filter((item) =>
            item.tytul.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter((item) =>
            statusBazy === 'magazyn' ? item.czy_sprzedana === false : item.czy_sprzedana === true
        );
    // Edytowanie rekordow sell/edit

    const [edytowanyRekord, setEdytowanyRekord] = useState<magazyn | null>(null);

    const handleUpdate = async (updatedData: Partial<magazyn>) => {
        if (!edytowanyRekord) return;
        const { error } = await supabase
            .from('mangi')
            .update(updatedData)
            .eq('id', edytowanyRekord.id);

        if (error) {
            alert('Błąd podczas aktualizacji: ' + error.message);
        } else {
            alert('Zaktualizowano rekord');
            setEdytowanyRekord(null);
            // odśwież dane
            const { data } = await supabase.from('mangi').select('*').order('created_at', { ascending: false });
            setData(data ?? []);
        }
    };
    return (
        <div className="text-white flex w-full flex-col items-center">
            <div className="flex w-4/5">
                <button onClick={() => setAktywnyFormularz('kupiona')} className="rounded bg-sky-700 flex p-1 m-2">
                    <Plus strokeWidth={1}/> Kupiona Manga
                </button>
            </div>
            {aktywnyFormularz === 'kupiona' && (
                <div className=" p-4 bg-neutral-800 rounded">
                    <h2 className="text-lg font-semibold mb-2">Dodaj mangę</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Tytuł"
                            name="tytul"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Pierwszy tom"
                            name="tomstart"
                            type="number"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <span className="mt-1 mb-1 text-xs flex items-center text-white">
                            <BadgeHelp size={12} className="mr-1" />
                            Jeśli chcesz podać kilka tomów, wpisz np. 1-6
                        </span>
                        <input
                            placeholder="Ostatni tom"
                            name="tomend"
                            type="number"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Od kogo"
                            name="kupiona_od"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <span className="mt-1 mb-1 text-xs flex items-center text-white">
                            <BadgeHelp size={12} className="mr-1" />
                            Data zakupu
                        </span>
                        <input
                            placeholder="Data Zakupu"
                            name="date"
                            type="date"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Cena za 1 tom"
                            name="cena"
                            step="0.01"
                            type="number"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Uwagi"
                            name="uwagi"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        /><input
                            placeholder="Zdjecie"
                            name="zdjecie"
                            className="block bg-neutral-600 w-full mb-2 p-2 rounded"
                            onChange={handleChange}
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 mr-2 mt-2 rounded">
                            Wyślij
                        </button>
                        <button
                            type="button"
                            onClick={zamknijFormularz}
                            className="bg-red-500 text-white p-2 ml-2 mt-2 rounded"
                        >
                            Anuluj
                        </button>
                    </form>
                </div>
            )}
            <div className="flex w-4/5 flex">
                <span className="bg-neutral-800 m-2 p-1 text-sm rounded">
                    Mangowy lisek &gt;
                    <select
                        name="status_bazy"
                        className="text-orange-400 bg-neutral-800"
                        onChange={(e) => setStatusBazy(e.target.value as 'magazyn' | 'sprzedane')}>
                        <option value="magazyn">Stan magazynowy ({filteredData.length} mang)</option>
                        <option value="sprzedane">Sprzedane Mangi ({filteredData.length} mang)</option>
                    </select>
                </span>
                <span className="bg-neutral-800 m-2 p-1 text-sm rounded">
                    Sortowanie Według &gt;
                    <select
                        className="rounded bg-neutral-800 text-orange-400 ml-1"
                        name="sort"
                        onChange={(e) => {
                            const value = e.target.value;
                            switch (value) {
                                case 'ID':
                                    sortBy('id');
                                    break;
                                case 'Tom':
                                    sortBy('tom');
                                    break;
                                case 'Nazwie':
                                    sortBy('tytul');
                                    break;
                                case 'Cenie kupna':
                                    sortBy('cena_zakupu');
                                    break;
                                case 'Cenie sprzedaży':
                                    sortBy('cena_sprzedazy');
                                    break;
                                default:
                                    setSortedData([...data]); // przy "Brak" resetujemy do oryginału
                                    setSortConfig(null);
                            }
                        }}
                    >
  <option>Brak</option>
  <option>Nazwie</option>
  <option>Tom</option>
  <option>ID</option>
  <option>Cenie kupna</option>
  <option>Cenie sprzedaży</option>
</select>
                </span>
                <span className="bg-neutral-800 m-2 p-1 text-sm rounded">
                    Szukaj po frazie &gt;
                    <input
                        type="text"
                        name="search_text"
                        className="rounded bg-neutral-800 text-orange-400 ml-1"
                        placeholder="Podaj nazwę"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </span>
            </div>

            <div className="flex w-4/5">
                <table className="w-full rounded text-[12px]">
                    <thead>
                        <tr className="bg-neutral-900 text-left">
                            <th onClick={() => sortBy('id')}  className="p-2 border-neutral-400 border">
                                ID
                            </th>
                            <th onClick={() => sortBy('tytul')} className="p-2 border-neutral-400 border">
                                Tytuł
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Tom
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Kupiona od
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Data zakupu
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Cena zakupu
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Data sprzedaży
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Cena sprzedaży
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Kupujący
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Zysk
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Uwagi
                            </th>
                            <th className="p-2 border-neutral-400 border">
                                Zdjecie
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((row) => (
                        <React.Fragment key={row.id}>
                            <tr className="odd:bg-neutral-700 even:bg-neutral-800">
                                <td className="p-2 border-neutral-400 border">{row.id}</td>
                                <td className="p-2 border-neutral-400 border">{row.tytul}</td>
                                <td className="p-2 border-neutral-400 border">{row.tom}</td>
                                <td className="p-2 border-neutral-400 border">{row.kupiona_od || "Brak"}</td>
                                <td className="p-2 border-neutral-400 border">{row.data_zakupu}</td>
                                <td className="p-2 border-neutral-400 border">{row.cena_zakupu} PLN</td>
                                <td className="p-2 border-neutral-400 border">{row.data_sprzedazy || '❌'} </td>
                                <td className="p-2 border-neutral-400 border">{row.cena_sprzedazy || '0'}  PLN</td>
                                <td className="p-2 border-neutral-400 border">{row.kupujacy|| '❌'}</td>
                                <td className="p-2 border-neutral-400 border">{row.cena_sprzedazy ? `${row.cena_sprzedazy} PLN` : '❌'}</td>
                                <td className="p-2 border-neutral-400 border">{row.uwagi}</td>
                                <td className="p-2 border-neutral-400 max-w-[20px] border">{row.zdjecie ? (
                                    <a href={row.zdjecie} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        Zobacz zdjęcie
                                    </a>
                                ) : (
                                    'Brak'
                                )}</td>

                                <td className="p-2 border-neutral-400 border">
                                    <button onClick={() => setEdytowanyRekord(row)}>
                                        <Pencil size={14} strokeWidth={1.5} />
                                    </button>
                                </td>

                            </tr>

                            {/* Formularz edycji w nowym <tr> jeśli to ten rekord */}
                            {edytowanyRekord?.id === row.id && (
                                <tr className="bg-neutral-900">
                                    <td colSpan={13} className="p-4 border-t border-neutral-600">
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            handleUpdate(edytowanyRekord);
                                        }} className="grid grid-cols-1 w-full md:grid-cols-2 gap-2">
                                            <input
                                                type="text"
                                                value={edytowanyRekord.tytul}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, tytul: e.target.value })}
                                                placeholder="Tytuł"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="number"
                                                value={edytowanyRekord.tom}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, tom: parseInt(e.target.value) })}
                                                placeholder="Tom"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="date"
                                                value={edytowanyRekord.data_zakupu}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, data_zakupu: e.target.value })}
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={edytowanyRekord.cena_zakupu}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, cena_zakupu: parseFloat(e.target.value) })}
                                                placeholder="Cena zakupu"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="date"
                                                value={edytowanyRekord.data_sprzedazy || ''}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, data_sprzedazy: e.target.value })}
                                                placeholder="Data sprzedaży"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={edytowanyRekord.cena_sprzedazy || 0}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, cena_sprzedazy: parseFloat(e.target.value) })}
                                                placeholder="Cena sprzedaży"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="text"
                                                value={edytowanyRekord.kupujacy || ''}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, kupujacy: e.target.value })}
                                                placeholder="Kupujący"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="text"
                                                value={edytowanyRekord.uwagi || ''}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, uwagi: e.target.value })}
                                                placeholder="Uwagi"
                                                className="bg-neutral-700 p-2 rounded"
                                            />
                                            <input
                                                type="text"
                                                value={edytowanyRekord.zdjecie || ''}
                                                onChange={(e) => setEdytowanyRekord({ ...edytowanyRekord, zdjecie: e.target.value })}
                                                placeholder="Link do zdjęcia"
                                                className="bg-neutral-700 p-2 rounded"
                                            />

                                            <div className="flex gap-2 col-span-full justify-end">
                                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                                                    Zapisz zmiany
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setEdytowanyRekord(null)}
                                                    className="bg-gray-600 text-white px-4 py-2 rounded"
                                                >
                                                    Anuluj
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
