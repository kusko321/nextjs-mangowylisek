import Image from "next/image";

export default function Page() {
    return (
    <div
        className="grid justify-items-center"
    >
        <div
            className="flex flex-row items-center gap-8"
        >
            <Image
                src="/mangowy-lisek-logo.png"
                alt="Mangowy Lisek logo"
                width={80}
                height={80}
                priority
            />
            <input
                className="focus\:border-0:focus placeholder-neutral-600 text-gray-50 bg-neutral-800 p-1.5"
                type="text"
                placeholder="Podaj nazwe mangi"
            />
dsd
        </div>
    </div>
)
}