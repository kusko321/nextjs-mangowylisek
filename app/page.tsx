'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/app/api/supabase";
import { Star, StarHalf } from 'lucide-react';
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
    const [filteredData, setFilteredData] = useState<Vinted[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchVintedData = async () => {
            const { data, error } = await supabase.from('vinted').select('*');
            if (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } else {
                setVintedData(data || []);
                setFilteredData(data || []);
            }
        };

        fetchVintedData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = vintedData.filter(item =>
            item.nazwa.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
    };

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
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>
                    <div style={{ maxWidth: 210, minWidth: 210 }} className="w-min-[200px] keen-slider__slide flex flex-col m-2 p-3 hover:border-neutral-950 hover:shadow-lg hover:shadow-orange-900/10 border border-neutral-800 rounded-lg">
                        <Image
                            src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                            alt="Manga "
                            width={180}
                            height={240}
                            className="rounded-lg"
                        />
                        <div className="flex mt-1 text-sm">Hayiku!! - Tom 1  </div>
                        <div className="flex mt-4 text-sm text-neutral-500 whitespace-nowrap"><s>23,99 PLN - Cena katalogowa</s></div>
                        <div className="flex text-sm ">5,00 PLN</div>
                    </div>

                </div>

            </div>
            <div className="mt-6 p-6 w-10/12 grid bg-neutral-800 rounded-xl">
                <div className="text-3xl font-bold mb-1">Zestawy Vinted</div>
                <div className="text-xs ">Kupuj taniej w zestawie! Za pośrednictwem Vinted</div>

                <div ref={refVinted} className="flex flex-row keen-slider mt-1 place-content-center items-center text-center">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
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
                        ))
                            : (
                        <p className="text-white">Brak mang o nazwie: {searchQuery}</p>
                        )}

                </div>
            </div>
            <div className="w-10/12 ">

                <div className="mt-2 flex flex-wrap items-center text-sm pt-2 pb-2 border-t border-b border-neutral-700 w-full ">
                    sorotwanie
                    <div className="flex max-[600px]:hidden rounded">
                        <input
                            className="w-96 rounded-t rounded-b focus:border-teal-500 focus:outline-none placeholder-neutral-600 text-gray-50 bg-neutral-800 p-1.5"
                            type="text"
                            placeholder="Podaj nazwę mangi"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button className="bg-neutral-950 p-2.5 rounded">
                            <Image
                                className="dark:invert"
                                src="/search.svg"
                                alt="Szukaj"
                                width={16}
                                height={16}
                                priority
                            />
                        </button>
                    </div>
                    nastepny
                </div>

                <div className="flex flex-col items-center text-sm   border-neutral-700 w-full ">
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - Tom 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w paczce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - To323m 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w pa3232czce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - To323m 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w pa3232czce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - To323m 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w pa3232czce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - To323m 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w pa3232czce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>
                    <div className="border-b border-neutral-700 w-full p-2 flex flex-wrap items-center place-content-between ">
                        <div className="w-1/12">
                            <Image
                                src="https://s5u7yrgbcfphwffz.public.blob.vercel-storage.com/IMG_7264_batcheditor_fotor_batcheditor_fotor-WDagzbfQBVTDLqKejQAyqEXsplcxn7.jpg"
                                alt="Manga "
                                width={45}
                                height={60}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex-col flex ml-1 w-2/4">
                            <span>Haikyuu!! - To323m 1</span>
                            <span className="text-neutral-500">Możliwość zakupu w pa3232czce: Haikyuu! - Tom 1-3 | Komplet sportówek</span>
                        </div>
                        <div className="flex-col flex ml-1 w-1/4">
                            <span className="flex-wrap flex pb-1"><Star size={18}/><Star size={18}/><Star size={18}/><Star size={18}/><StarHalf size={18}/></span>
                            <span className="text-neutral-500">Stan wizualny</span>
                        </div>
                        <div className="flex-col flex ml-1 1/5">
                            <span className="flex-wrap flex pb-1">10 PLN</span>
                            <span className="text-neutral-500">Cena za szt.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
