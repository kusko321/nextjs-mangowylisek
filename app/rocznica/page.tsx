'use client';
import Image from "next/image";
import * as React from "react";
import {Plane} from 'lucide-react';
export default function Home() {
    return (
        <div className="grid justify-items-center font-sans ">
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/zadar.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">RZE</span> <Plane strokeWidth={3} />  <span className="p-3">ZAD</span>
                </div>
                <div className="bg-teal-50 text-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-950">
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-sm">Pasażer</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">FR9399</span>
                        <span className="text-sm">Lot</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">16A</span>
                        <span className="text-sm">Miejsce</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">21/06/2025  21:50</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>
            </div>

            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/zadar.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">RZE</span> <Plane strokeWidth={3} />  <span className="p-3">ZAD</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażer</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">FR9399</span>
                        <span className="text-sm">Lot</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">16B</span>
                        <span className="text-sm">Miejsce</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-1">
                        <span className="text-lg font-medium">21/06/2025  21:50</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
