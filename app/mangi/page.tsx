import Image from "next/image";
import fs from 'fs';
import path from 'path';


export default async function Page() {
    const filePath = path.join(process.cwd(), 'public', 'manga.json');

    // Odczyt danych z pliku JSON
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
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


            </div>
            <div className="mt-6 grid">
                <div className="flex flew-row items-center">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
                        >
                            <h2>{item.name}</h2>
                            <p>Genre: {item.genre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

)
}