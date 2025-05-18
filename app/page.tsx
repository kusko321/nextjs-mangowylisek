'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/app/api/supabase";
import {Star, StarHalf, ChevronRight, ChevronLeft} from 'lucide-react';
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
type Vinted = {
    id: number;
    id_mang: number | Record<string, unknown>;
    nazwa: string;
    cena: number;
    zdjecie: string;
    tom: string;
    link: string;
};
type Sklep = {
    id: number;
    id_mangi: number;
    cena_katalogowa: number;
    cena_sprzedazy: number
    promocja: boolean;
    stan: number;
    tagi: string;
};
type Magazyn = {
    id: number;
    created_at: string;
    tytul: string;
    tom: number;
    kupiona_od: string;
    data_zakupu: string;
    cena_zakupu: number;
    czy_sprzedana: boolean;
    data_sprzedazy: string;
    cena_sprzedazy: number;
    kupujacy: string;
    uwagi: string;
    zdjecie: string;
};

export default function Page() {


    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "free-snap",
        rtl: false,
        slides: { perView: "auto",spacing: 10 },
    })
    const [refVinted] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "free-snap",
        rtl: false,
        slides: { perView: "auto",spacing: 10 },
    })

    const [vintedData, setVintedData] = useState<Vinted[]>([]);
    const [sklepData, setSklepData] = useState<Sklep[]>([]);
    const [promocjaData, setpromocjaData] = useState<Sklep[]>([]);
    const [magazynData, setMagazynData] = useState<Magazyn[]>([]);
    useEffect(() => {
        const fetchPromcjaData = async () => {
            const { data, error } = await supabase.from('sklep').select('*').eq('promocja', true);
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setpromocjaData(data || []);

            }
        };
        fetchPromcjaData();
    }, []);
    useEffect(() => {
        const fetchSklepData = async () => {
            const { data, error } = await supabase.from('sklep').select('*');
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setSklepData(data || []);

            }
        };
        fetchSklepData();
    }, []);
    useEffect(() => {
        const fetchVintedData = async () => {
            const { data, error } = await supabase.from('vinted').select('*');
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setVintedData(data || []);

            }
        };
        fetchVintedData();
    }, []);
    useEffect(() => {
        const fetchMagazynData = async () => {
            const { data, error } = await supabase.from('mangi').select('*');
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setMagazynData(data || []);

            }
        };
        fetchMagazynData();
    }, []);
    return (
        <div className="grid justify-items-center">
            <div className="flex flex-row items-center gap-8 max-[600px]:gap-2">

                <Image
                    src="/mangowy-logo.png"
                    alt="Mangowy Lisek logo"
                    width={90}
                    height={90}
                    priority
                />
                <Link href="https://www.tiktok.com/@mangowylisek" target="_blank">
                    <Image src="/tiktok.svg"
                           alt="TikTok - @MangowyLisek"
                           width={24}
                           height={24}
                    />
                </Link>
                <Link href="https://www.instagram.com/mangowylisek/" target="_blank">
                    <Image src="/instagram.svg"
                           alt="Instagram - @MangowyLisek"
                           width={24}
                           height={24}
                    />
                </Link>
                <Link href="https://www.vinted.pl/member/217332029" target="_blank">
                    <Image src="/vinted.svg"
                           alt="Vinted - mangowylisek"
                           width={24}
                           height={24}
                    />
                </Link>
                <div className="text-xs opacity-55 font-extralight text-gray-50 bg-neutral-800 p-2 rounded hover:bg-neutral-700 hover:text-neutral-200">
                    Wkrótce
                </div>
                <div className="text-xs font-normal text-gray-50 bg-amber-600 p-2 rounded hover:bg-amber-900 hover:text-neutral-200">
                    Ilość Mang: {vintedData.length}
                </div>
            </div>
            <div className="mt-6 p-6 w-10/12 grid bg-neutral-800 rounded-xl">
                <div className="text-3xl font-bold mb-1">Promocje</div>
                <div className="text-xs ">Nawet 80% taniej niż cena katalogowa</div>
                <div ref={ref} className="flex flex-row keen-slider mt-1 place-content-center items-center text-center">
                    {promocjaData.map((item) => {
                        const manga = magazynData.find((m) => m.id === item.id_mangi);
                        if (!manga) return null;
                        return (
                            <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg" key={item.id}>
                                <Image
                                    src={manga.zdjecie}
                                    alt={manga.tytul}
                                    width={180}
                                    height={240}
                                    className="rounded-lg"
                                />
                                <div className="flex mt-1 text-sm">{manga.tytul} - Tom {manga.tom}  </div>
                                <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>{item.cena_katalogowa} PLN - Cena katalogowa</s></div>
                                <div className="flex text-sm ">{item.cena_sprzedazy} PLN</div>
                            </div>



                        );
                    })}
                </div>

            </div>
            <div className="mt-6 p-6 w-10/12 grid bg-neutral-800 rounded-xl">
                <div className="text-3xl font-bold mb-1">Zestawy Vinted</div>
                <div className="text-xs ">Kupuj taniej w zestawie! Za pośrednictwem Vinted</div>

                <div ref={refVinted} className="flex flex-row keen-slider mt-1 place-content-center items-center text-center">
                    {vintedData.map((item) => (
                            <Link key={item.id}  href={item.link} target="_blank">
                                <div style={{ maxWidth: 210, minWidth: 210 }} className="keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                                    <Image
                                        src={item.zdjecie}
                                        alt={item.nazwa}
                                        width={180}
                                        height={240}
                                        className="rounded-lg"
                                    />
                                    <div className="flex mt-1 text-sm">{item.nazwa} - Tom {item.tom}</div>
                                    <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>70 PLN - Cena katalogowa</s></div>
                                    <div className="flex text-sm ">{item.cena} PLN</div>
                                </div>
                            </Link>)
                    )}
                </div>
            </div>
            <div className="w-10/12 ">
                <div className="mt-2 flex flex-nowrap items-center place-content-between text-sm pt-2 pb-2 border-t border-b border-neutral-700 w-full ">
                    <select className="text-white bg-neutral-800 rounded-lg p-1">
                        <option>Test</option>
                    </select>
                    <div className="flex flex-nowrap items-center text-center">
                        <button className="mr-2 bg-neutral-700 p-1.5 rounded-lg"><ChevronLeft strokeWidth={1.25}/> </button>
                        <span className="p-1">1</span>
                        <span className="p-1">z</span>
                        <span className="p-1">6</span>
                        <button className="ml-2 bg-neutral-700 p-1.5 rounded-lg"><ChevronRight strokeWidth={1.25}/> </button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-sm border-neutral-700 w-full max-[600px]:text-[10px] max-[600px]:tracking-[-0.075em] ">
                {sklepData.map((item) => {
                    const manga = magazynData.find((m) => m.id === item.id_mangi);
                    if (!manga) return null;
                    return (
                        <Link className="border-b border-neutral-700 w-full p-2 flex flex-nowrap items-center place-content-between " key={item.id} href="/sklep" target="_blank">
                                <div className="w-1/12">
                                    <Image
                                        src={manga.zdjecie}
                                        alt={manga.tytul}
                                        width={45}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex-col flex ml-1 w-2/4">
                                    <span>{manga.tytul} - Tom {manga.tom}</span>
                                    <span className="text-neutral-500">Możliwość zakupu w pacze: WKRÓTCE!</span>
                                </div>
                                <div className="flex-col flex ml-1 w-1/4">
                                            <span className="flex-wrap flex pb-1">
                                                {[...Array(Math.floor(item.stan))].map((_, i) => (
                                                    <Star key={i} size={18} strokeWidth={1.25} />
                                                ))}
                                                {item.stan % 1 !== 0 && <StarHalf size={18} strokeWidth={1.25} />}
                                            </span>
                                    <span className="text-neutral-500">Stan wizualny</span>
                                </div>
                                <div className="flex-col flex ml-1 1/5">
                                    <span className="flex-wrap flex pb-1">{item.cena_sprzedazy} PLN</span>
                                    <span className="text-neutral-500">Cena za szt.</span>
                                </div>
                        </Link>
                    );
                })}
                </div>
            </div>
        </div>
    );
}
