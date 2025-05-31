import Link from "next/link";
import { Archive, Store, ChartLine } from 'lucide-react';
import * as React from "react";
export default function Page() {
    return(
        <div className="grid justify-items-center">
            <div className="mt-6 p-6 w-10/12 grid bg-neutral-800 rounded-xl">
                <div className="text-3xl font-bold mb-1">Menu Mangowego </div>
                <div className="text-xs ">Szybka nawigacja do mangowego :3</div>
                <div className="flex flex-row max-[600px]:flex-col mt-1 align-middle place-content-center items-center text-center">
                    <Link href='mangowy/magazyn' className='place-content-center flex flex-col max-[600px]:w-full w-1/4 m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-950 rounded-lg'>
                        <div className="place-content-center flex flex-row text-xl"> <Archive size={30} strokeWidth={1}/> <span className="pl-3">Magazyn</span></div>
                        <div className="place-content-center flex flex-row text-xs mt-3">
                            <span className="p-1 text-orange-500">Książki na pułkach</span>
                            <span className="p-1 text-orange-700">Zdjęcia mang</span>
                        </div>
                    </Link>
                    <Link href='mangowy/sklep' className='place-content-center flex flex-col w-1/4 m-2 p-3 max-[600px]:w-full hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-950 rounded-lg'>
                        <div className="place-content-center flex flex-row text-xl"> <Store size={30} strokeWidth={1}/> <span className="pl-3">Sklep</span></div>
                        <div className="place-content-center flex flex-row text-xs mt-3">
                            <span className="p-1 text-orange-500">Strona Główna</span>
                            <span className="p-1 text-orange-700">Promocje</span>
                            <span className="p-1 text-orange-500">Vinted</span>
                            <span className="p-1 text-orange-700">Sklep</span>
                        </div>
                    </Link>
                    <Link href='mangowy/statystyki' className='place-content-center flex flex-col w-1/4 m-2 p-3 max-[600px]:w-full hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-950 rounded-lg'>
                        <div className="place-content-center flex flex-row text-xl"> <ChartLine size={30} strokeWidth={1}/> <span className="pl-3">Statystyki</span></div>
                        <div className="place-content-center flex flex-row text-xs mt-3">
                            <span className="p-1 text-orange-500">Statystyki miesiaca</span>
                            <span className="p-1 text-orange-700">Szybkie podsumowanie stanu etc.</span>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    )
}
