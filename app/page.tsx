"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Anime = {
    id: number;
    name: string;
    stan: string;
    tom: string;
    img: string;
    link: string;
    price: number;
};

export default function Page() {
    const [data, setData] = useState<Anime[]>([]);
    const [filteredData, setFilteredData] = useState<Anime[]>([]);
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

        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="grid justify-items-center">
            <div className="flex flex-row items-center gap-8">
                <Image
                    src="/mangowy-lisek-logo.png"
                    alt="Mangowy Lisek logo"
                    width={70}
                    height={70}
                    priority
                />
                <div className="flex bg-neutral-800 rounded">
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
                    Ilość Mang: {data.length}
                </div>
            </div>
            <div className="mt-6 grid">
                <div className="flex flew-row items-center">
                    <div className="flex">
                        {filteredData.length > 0 ? (
                            filteredData.map((item: Anime) => (
                                <div
                                    key={item.id}
                                    className="flex items-center m-1 bg-neutral-800 text-white rounded-lg p-2.5 hover:bg-neutral-900"
                                >
                                    {/* Obrazek po lewej stronie */}
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={120} //  obrazka
                                            height={160} // Wysokość obrazka
                                            className="rounded-lg object-cover"
                                        />
                                    </div>

                                    {/* Tekst po prawej stronie */}
                                    <div className="ml-4 flex flex-col justify-between h-full">
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-sm text-gray-400 mt-1">Stan: {item.stan}</p>
                                            <p className="text-sm text-gray-400 mt-1">Tom: {item.tom}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-amber-400 text-2xl font-bold">{item.price} PLN</span>
                                            <button className="bg-teal-800 px-2 py-1 rounded text-white hover:bg-teal-700">
                                                Vinted
                                            </button>
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
