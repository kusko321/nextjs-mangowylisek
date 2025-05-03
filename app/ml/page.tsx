'use client';
import {useEffect, useState} from 'react';
import { supabase } from '../api/supabase';
import { Plus, BadgeHelp  } from 'lucide-react';

type magazyn = {
    id: number;
    tytul: string;
    tom: number;
    kupiona_od: string;
    data_zakupu: string;
    uwagi: string;
    cena_zakupu: number;
};
export default function page() {
    const [formData, setFormData] = useState({
        tytul: '',
        tomstart: '',
        tomend: '',
        kupiona_od: '',
        date: '',
        cena: '',
        uwagi: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const start = parseInt(formData.tomstart);
        const end = parseInt(formData.tomend);

        let rekordy = [];

        if (!isNaN(end) && end > start) {
            // Wysyłanie wielu rekordów od tomstart do tomend
            for (let i = start; i <= end; i++) {
                rekordy.push({
                    tytul: formData.tytul || 'nie ma',
                    tom: i,
                    kupiona_od: formData.kupiona_od,
                    data_zakupu: formData.date,
                    cena_zakupu: parseFloat(formData.cena) || 0,
                    uwagi: formData.uwagi,
                    czy_sprzedana: false,
                });
            }
        } else {
            // Wysyłanie jednego rekordu
            rekordy.push({
                tytul: formData.tytul || 'nie ma',
                tom: start,
                kupiona_od: formData.kupiona_od,
                data_zakupu: formData.date,
                cena_zakupu: parseFloat(formData.cena) || 0,
                uwagi: formData.uwagi,
                czy_sprzedana: false,
            });
        }

        const { data, error } = await supabase.from('mangi').insert(rekordy);

        if (error) {
            alert('Błąd: ' + error.message);
        } else {
            alert('Dodano ' + rekordy.length + ' rekord(ów)');
            zamknijFormularz();
        }
    };
    const [data, setData1] = useState<magazyn[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('mangi')
                .select('*')
                .order('created_at', { ascending: false });
            console.log("DANE Z SUPABASE:", data);
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                console.log("DANE Z SUPABASE:", data);
                setData1(data);
            }
        };
        fetchData();
    }, []);

    // Formularz js
    const [aktywnyFormularz, setAktywnyFormularz] = useState(null);
    const zamknijFormularz = () => setAktywnyFormularz(null);
    return(
        <div className="text-white flex w-full flex-col items-center">
            <div className="flex w-4/5">
                <button onClick={() => setAktywnyFormularz('kupiona')} className="rounded bg-sky-700 flex p-1 m-2 ">
                    <Plus /> Kupiona Manga
                </button>
                <button onClick={() => setAktywnyFormularz('sprzedana')} className="rounded bg-purple-700 flex p-1 m-2">
                    <Plus /> Sprzedana Manga
                </button>
                <button  onClick={() => setAktywnyFormularz('vinted')}  className="rounded bg-teal-700 flex p-1 m-2">
                    <Plus /> Oferta Vinted
                </button>
            </div>
            {aktywnyFormularz === 'kupiona' && (
                <div className=" p-4 bg-neutral-800 rounded">
                    <h2 className="text-lg font-semibold mb-2">Dodaj mangę</h2>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Tytuł" name="tytul" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />
                        <input placeholder="Pierwszy tom" name="tomstart" type="number" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />

                        <span className="mt-1 mb-1 text-xs flex items-center text-white">
        <BadgeHelp size={12} className="mr-1" />
        Jeśli chcesz podać kilka tomów, wpisz np. 1-6
      </span>

                        <input placeholder="Ostatni tom" name="tomend" type="number" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />
                        <input placeholder="Od kogo" name="kupiona_od" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />

                        <span className="mt-1 mb-1 text-xs flex items-center text-white">
        <BadgeHelp size={12} className="mr-1" />
        Data zakupu
      </span>

                        <input placeholder="Data Zakupu" name="date" type="date" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />
                        <input placeholder="Cena za 1 tom" name="cena" type="number" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />
                        <input placeholder="Uwagi" name="uwagi" className="block bg-neutral-600 w-full mb-2 p-2 rounded" onChange={handleChange} />

                        <button type="submit" className="bg-blue-500 text-white p-2 mr-2 mt-2 rounded">Wyślij</button>
                        <button type="button" onClick={zamknijFormularz} className="bg-red-500 text-white p-2 ml-2 mt-2 rounded">Anuluj</button>
                    </form>
                </div>
            )}
            <div className="flex w-4/5 flex">
                <span className="bg-neutral-800 m-2 p-1 text-xs rounded"> Mangowy lisek &gt; Stan magazynowy</span>
            </div>

            <div className="flex w-4/5">
                <table className="w-full  rounded">
                    <thead>
                    <tr className="bg-neutral-900 text-left text-sm ">
                        <th className="p-2 border-neutral-600 border">Tytuł</th>
                        <th className="p-2 border-neutral-600 border">Tom</th>
                        <th className="p-2 border-neutral-600 border">Kupiona od</th>
                        <th className="p-2 border-neutral-600 border">Data zakupu</th>
                        <th className="p-2 border-neutral-600 border">Cena zakupu</th>
                        <th className="p-2 border-neutral-600 border">Uwagi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row) => (
                        <tr key={row.id} className="bg-neutral-800 text-sm">
                            <td className="p-2 border-neutral-600 border">{row.tytul}</td>
                            <td className="p-2 border-neutral-600 border">{row.tom}</td>
                            <td className="p-2 border-neutral-600 border">{row.kupiona_od || 'Brak danych'}</td>
                            <td className="p-2 border-neutral-600 border">{row.data_zakupu || '2025-05-01'}</td>
                            <td className="p-2 border-neutral-600 border">{row.cena_zakupu || '00'} PLN </td>
                            <td className="p-2 border-neutral-600 border">{row.uwagi}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>

    );
}
