"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbsggxpkgwhaoneuxams.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpic2dneHBrZ3doYW9uZXV4YW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTA3NjIsImV4cCI6MjA2MTYyNjc2Mn0.O3NCcw-Z2gQ_fq-FN07Ne9gBCKcTQaG7JJys6TDRpLE';
const supabase = createClient(supabaseUrl, supabaseKey);


type Manga = {
    id: number;
    name: string;
    stan: string;
    tom: string;
    img: string;
    link: string;
    price: number;
};

export default function Page() {


    const [datamanga, setData] = useState<Manga[]>([]);
    const [filteredData, setFilteredData] = useState<Manga[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/manga.json");
                const jsonData = await response.json();
                setData(jsonData);
                setFilteredData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = datamanga.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
    };
    type TestRow = {
        id: number;
        name: string;
        date: string;
        // Dodaj inne pola, które są w tabeli
    };

    const [data, setData1] = useState<TestRow[]>([]);

        useEffect(() => {
            const fetchData = async () => {
                const { data, error } = await supabase
                    .from('mangi')
                    .select('*');
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
    return (
        <div className="grid  justify-items-center">
            <div>
                <h1>Dane z tabeli test </h1>
                <ul>
                    {data.map((row) => (
                        <li key={row.id}>
                            {JSON.stringify(row)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-row items-center gap-8">
                <Image
                    src="/mangowy-logo.png"
                    alt="Mangowy Lisek logo"
                    width={90}
                    height={90}
                    priority
                />
                <div className="flex max-[600px]:hidden bg-neutral-800 rounded">
                    <input
                        className="w-96 rounded-t rounded-b focus:border-teal-500 focus:outline-none placeholder-neutral-600 text-gray-50 bg-neutral-800 p-1.5"
                        type="text"
                        placeholder="Podaj nazwe mangi"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="bg-neutral-950 p-2.5 rounded">
                        <Image
                            className="dark:invert"
                            src="/search.svg"
                            alt="Search"
                            width={16}
                            height={16}
                            priority
                        />
                    </button>
                </div>
                <div className="text-xs opacity-55 font-extralight text-gray-50 bg-neutral-800 p-2 rounded hover:bg-neutral-700 hover:text-neutral-200">
                    Wkrótce
                </div>
                <div className="text-xs font-normal text-gray-50 bg-amber-600 p-2 rounded hover:bg-amber-900  hover:text-neutral-200">
                    Ilość Mang: {datamanga.length}
                </div>
            </div>
            <div className="mt-6  w-10/12 grid">
                <div className="flex flew-row items-center">
                    <div className="flex w-full flex-wrap justify-center">
                        {filteredData.length > 0 ? (
                            filteredData.map((item: Manga) => (
                                <div
                                    key={item.id}
                                    className="flex max-[1300px]:w-full w-3/12 max-sm:w-full max-w-prose items-center m-1 bg-neutral-800 text-white rounded-lg p-2 hover:bg-neutral-900"
                                >
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={120} // Szerokość obrazka
                                            height={160} // Wysokość obrazka
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="ml-4 flex flex-col justify-between h-full w-full max-w-prose">
                                        <div>
                                            <h2 className="text-lg font-semibold max-w-prose">{item.name}</h2>
                                            <p className="text-sm text-gray-400 mt-1">Stan: {item.stan}</p>
                                            <p className="text-sm text-gray-400 mt-1">Tom: {item.tom}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4 w-full">
                                            <span className="text-amber-400 text-2xl font-bold">{item.price} PLN</span>
                                            <Link href={item.link}
                                                  target="_blank"
                                            >
                                                <button className="bg-teal-800 px-2 py-1 rounded text-white hover:bg-teal-700">
                                                    Vinted
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Brak mang o nazwie: {searchQuery}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}