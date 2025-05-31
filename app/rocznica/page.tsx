'use client';
import * as React from "react";
import {Plane, TrainFront } from 'lucide-react';
export default function Home() {
    return (
        <div className="grid justify-items-center font-sans ">
            <span className="text-2xl m-5 font-black">Podróż z okazji rocznicy </span>
            <div className="m-5 text-lg">
                Piątek 20 Czerwca
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Wstanie i przygotowanie do odjazdu </span>
                <span>- Śniadanie</span>
                <span>- Dotracie do dwora</span>
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
                        <span className="text-xl font-medium">20.06.2025</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Krótkie zwiedzanie Kraków</span>
                <span>- Obiadokolacja</span>
                <span>- Miałobyć Ekipa fesiwal, ale za drogie... </span>
                <span>- Może coś znajdziemy zamiast tego :3 </span>
                <span>- Spanko </span>
            </div>
            <div className="m-5 text-lg">
                Sobota 21 Czerwca
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Wstanie i przygotowanie do odjazdu </span>
                <span>- Śniadanie</span>
                <span>- Dotracie do dwora</span>
            </div>
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/krakow.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">KRK</span> <TrainFront  strokeWidth={3} />  <span className="p-3">RZE</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażerowie</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">21.06.2025</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Obiadokolacja </span>
                <span>- Dotracie do lotniska</span>
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
                            <span className="text-xl font-medium">21.06.2025 21:50</span>
                            <span className="text-sm">Czas wylotu</span>
                        </div>
                        <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                            <span className="text-xl font-medium">21.06.2025 23:30</span>
                            <span className="text-sm">Czas przylotu</span>
                        </div>
                    </div>
                </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Dotarcie do apartamentu </span>
            </div>
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/zadarmiasto.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3 text-amber-500">ZAD</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pobyt dla</span>
                    </div>

                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Josipa Basiolija 41D, Zadar, Chorwacja</span>
                        <span className="text-sm">Miejsce</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">21.06.2025 - 26.06.2025</span>
                        <span className="text-sm">Czas pobytu</span>
                    </div>
                </div>
            </div>
            <div className="m-5 text-lg">
                Niedziela 22 - Czwartek 26 Czerwca
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Zwiedzanie Zadaru  </span>
                <span>- Inne pierdoły się zobaczy xD</span>

            </div>
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-[url(/zadar.jpg)] bg-cover bg-center w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">ZAD</span> <Plane strokeWidth={3} />  <span className="p-3">RZE</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażerowie</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">FR9400</span>
                        <span className="text-sm">Lot</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl spaci font-medium">16A</span>
                        <span className="text-xl font-medium">16B</span>
                        <span className="text-sm">Miejsce</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">26.06.2025 18:30</span>
                        <span className="text-sm">Czas wylotu</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">26.06.2025 20:10</span>
                        <span className="text-sm">Czas przylotu</span>
                    </div>
                </div>
            </div>
            <div className="w-[300px] flex-col flex text-xs font-semibold bg-amber-200 text-neutral-950 rounded-lg p-5">
                <span>- Przylot do Rzesowa </span>
                <span>- Dotarcie do hotelu</span>
            </div>
            <div className="m-5 text-lg">
                Piątek 27 - Sobota/Niedziela 28/29 Czerwca
            </div>
            <div className="m-2">
                <div className="flex flex-col w-[300px] text-3xl font-black text-center border-1 rounded-xl bg-orange-600 p-5">
                    <span className="">BON</span>
                    <span className="text-xs font-light">na wybranie miasta do którego jedziemy</span>
                    <div className="text-xs font-light m-3">
                        Zaplanuj dobrze gdzie jedziemy oraz mozesz wybrac atrakcje cena do ustalenia ^^
                    </div>
                </div>
            </div>
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-neutral-950 w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">RZE</span> <TrainFront  strokeWidth={3} />  <span className="p-3">***</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażerowie</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">27.06.2025</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>

            </div>
            <div className="m-5 text-lg">
                27/28/29 Czerwca
            </div>
            <div className="m-2">
                <div className="rounded-t-xl p-1 flex flex-row  items-center justify-center bg-neutral-950 w-[300px] h-[120px] text-3xl font-black text-center border-1 rounded-4">
                    <span className="p-3">***</span> <TrainFront  strokeWidth={3} />  <span className="p-3">TRG</span>
                </div>
                <div className="bg-neutral-950 rounded-b-xl p-1 break-words w-[300px] p-3 border-t border-dashed border-neutral-50">
                    <div className="pl-3 flex flex-col mt-3 mt-5 tracking-tight">
                        <span className="text-xl font-medium">Wiktoria Gruszczyńska</span>
                        <span className="text-xl font-medium">Adam Malinowski</span>
                        <span className="text-sm">Pasażerowie</span>
                    </div>
                    <div className="pl-3 flex flex-col mt-3 mt-5 mb-5 tracking-tight">
                        <span className="text-xl font-medium">27/28/29.06.2025</span>
                        <span className="text-sm">Data</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
