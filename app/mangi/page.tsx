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
        <div className="nav grid justify-items-center">
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
                    ilość Mang: {data.length}
                </div>
            </div>
            <div className="mt-6 grid">
                <div className="flex flew-row items-center">
                    <div>
                        {filteredData.length > 0 ? (
                            filteredData.map((item: Anime) => (
                                <div
                                    key={item.id}
                                    style={{
                                        border: "1px solid #ccc",
                                        margin: "10px",
                                        padding: "10px",
                                    }}
                                >
                                    <Image
                                        src={item.img} // Adres URL z Blob Storage
                                        alt={item.name}
                                        width={150}
                                        height={200}
                                        style={{
                                            borderRadius: "5px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <h2>{item.name}</h2>
                                    <p>Stan: {item.stan}</p>
                                    <p>Tom: {item.tom}</p>
                                    <p>Cena: {item.price} PLN</p>
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
