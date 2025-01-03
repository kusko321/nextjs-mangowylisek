import Image from "next/image";



export default async function Page() {
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

                </div>
            </div>
        </div>

)
}