'use client';
import * as React from "react";
import {Plane, TrainFront } from 'lucide-react';
export default function Home() {
    return (
        <div className="grid justify-items-center font-sans ">
            <span className="text-2xl m-5 font-black">Plan podróży z okazji naszej rocznicy</span>
            <div className="m-5 text-lg">
                Piątek 20 Czerwca
            </div>

            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/krakow.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">TRG</span> <TrainFront  strokeWidth={3} />  <span className="p-3">KRK</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażerowie</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">20/06/2025</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>
            </div>
            <div className="m-5 text-lg">
                Sobota 21 Czerwca
            </div>
                <div className="m-2">
                    <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/zadar.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                        <span className="p-3">RZE</span> <Plane strokeWidth={3} />  <span className="p-3">ZAD</span>
                    </div>
                    <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                        <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                            <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                            <span className="text-xl font-medium">Adam Malinowski</span>
                            <span className="text-sm">Pasażerowie</span>
                        </div>
                        <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                            <span className="text-xl font-medium">FR9399</span>
                            <span className="text-sm">Lot</span>
                        </div>
                        <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                            <span className="text-xl spaci font-medium">16A</span>
                            <span className="text-xl font-medium">16B</span>
                            <span className="text-sm">Miejsce</span>
                        </div>
                        <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                            <span className="text-xl font-medium">21/06/2025 21:50</span>
                            <span className="text-sm">Czas wylotu</span>
                        </div>
                        <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                            <span className="text-xl font-medium">21/06/2025 23:30</span>
                            <span className="text-sm">Czas przylotu</span>
                        </div>
                    </div>
                </div>


        </div>
    );
}
