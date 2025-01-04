import Image from "next/image";

import fs from 'fs';
import path from 'path';

export default async function Page() {
    type Anime = {
        id: number;
        name: string;
        stan: string;
        tom: string;
        img: string;
        link: string;
        price: number;
    };
    let data: Anime[] = []
    try {
        const filePath = path.join(process.cwd(), 'public', 'manga.json');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(jsonData);
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
    return (
        <div
            className="nav grid justify-items-center"
        >
            <div
                className="flex flex-row items-center gap-8"
            >

                <Image
                    src="/mangowy-lisek-logo.png"
                    alt="Mangowy Lisek logo"
                    width={70}
                    height={70}
                    priority
                />
                <div
                    className="flex bg-neutral-800  rounded"
                >
                    <input
                        className=" w-96 rounded-t rounded-b  focus:border-teal-500 focus:outline-none placeholder-neutral-600 text-gray-50 bg-neutral-800 p-1.5"
                        type="text"

                        placeholder="Podaj nazwe mangi"
                    />
                    <button
                        className="bg-neutral-950 p-2.5 rounded"

                    >
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
                <div
                    className="text-xs font-extralight text-gray-50 bg-neutral-800 p-2 rounded hover:bg-neutral-700 hover:text-neutral-200">
                    SKUP MANG
                </div>
                <div
                    className="text-xs font-normal text-gray-50 bg-neutral-800 p-2 rounded hover:bg-neutral-700 hover:text-neutral-200">
                    0.00 PLN
                </div>


            </div>
            <div className="mt-6 grid">
                <div className="flex flew-row items-center">
                    <div>
                        {data.length > 0 ? (
                            data.map((item:Anime) => (
                                <div
                                    key={item.id}
                                    style={{
                                        border: '1px solid #ccc',
                                        margin: '10px',
                                        padding: '10px',
                                    }}
                                >
                                    <h2>{item.name}</h2>
                                    <p>stan: {item.stan}</p>
                                </div>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

)
}