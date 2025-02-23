import {ZentoTrigger} from "@/app/ZentoTrigger";
import {IoIosArrowRoundUp} from "react-icons/io";
import React from "react";
import Image from "next/image";

export default function Projects(){
    return (
        <>
            <div className={"grid-cols-2 grid grid-row-4 gap-2 p-2 mx-36"}>
                <div
                    onClick={()=>window.open("https://github.com/Lowouis/netflix-clone-react")}
                    className="col-span-1 col-row-1"
                >
                    <ZentoTrigger
                        hoverable={false}
                        content={
                            <div className="relative group w-full h-full overflow-hidden rounded-2xl ">
                                <Image
                                    src="/images/projet3.png"
                                    alt="Netflix Clone Project"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:brightness-50 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute flex flex-row justify-between items-center px-4 rounded-full bottom-0 translate-y-14 left-0 w-full text-neutral-100 dark:text-neutral-100 py-2 text-3xl font-semibold transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <h1 className="text-left">Netflix Clone</h1>
                                    <span
                                        className="inner-span transform opacity-0 group-hover:rotate-90 group-hover:opacity-100 text-white rotate-45 transition-all rounded-full duration-500 p-2 w-[30px] h-[30px] flex items-center justify-center">
                                                    <h1 className="text-4xl"><IoIosArrowRoundUp /></h1>
                                    </span>
                                </div>
                            </div>
                        }
                        border
                    />
                </div>
                <div
                    onClick={()=>window.open("https://github.com/Lowouis/ricochet-robot")}
                    className="col-span-1 col-row-1">
                    <ZentoTrigger

                        hoverable={false}
                        content={
                            <div className="relative group w-full h-full overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/images/projet2.jpg"
                                    alt="Ricochet Robot Project"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:brightness-50 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute flex flex-row justify-between items-center px-4 rounded-full bottom-0 translate-y-14 left-0 w-full text-neutral-100 dark:text-neutral-100 py-2 text-3xl font-semibold transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <h1 className="text-left">Ricochet Robot A*</h1>
                                    <span
                                        className="inner-span transform opacity-0 group-hover:rotate-90 group-hover:opacity-100 text-white rotate-45 transition-all rounded-full duration-500 p-2 w-[30px] h-[30px] flex items-center justify-center">
                                                    <h1 className="text-4xl">
                                                        <IoIosArrowRoundUp />
                                                    </h1>
                                    </span>
                                </div>
                            </div>
                        }
                        border
                    />
                </div>
                <div className="col-span-1 col-row-1">
                    <ZentoTrigger
                        hoverable={false}
                        content={
                            <div
                                onClick={()=>window.open("https://github.com/Shingaz/agrumland")}
                                className="relative group w-full h-full overflow-hidden rounded-2xl shadow-lg"
                            >
                                <Image
                                    src="/images/projet4.jpg"
                                    alt="Agrumland Project"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:brightness-50 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute flex flex-row justify-between items-center px-4 rounded-full bottom-0 translate-y-14 left-0 w-full text-neutral-100 dark:text-neutral-100 py-2 text-3xl font-semibold transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <h1 className="text-left">Agrumland</h1>
                                    <span
                                        className="inner-span transform opacity-0 group-hover:rotate-90 group-hover:opacity-100 text-white rotate-45 transition-all rounded-full duration-500 p-2 w-[30px] h-[30px] flex items-center justify-center">
                                                    <h1 className="text-4xl"><IoIosArrowRoundUp /></h1>
                                                  </span>
                                </div>
                            </div>
                        }
                        border
                    />
                </div>
                <div className="col-span-1 col-row-1">
                    <ZentoTrigger
                        hoverable={false}
                        content={
                            <div
                                onClick={()=>window.open("https://github.com/Lowouis/BoatWar.git")}
                                className="relative group w-full h-full overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src="/images/projet5.jpg"
                                    alt="Bataille Naval IA Project"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:brightness-50 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute flex flex-row justify-between items-center px-4 rounded-full bottom-0 translate-y-14 left-0 w-full text-neutral-100 dark:text-neutral-100 py-2 text-3xl font-semibold transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-5">
                                    <h1 className="text-left">Bataille Naval IA</h1>
                                    <span
                                        className="inner-span transform opacity-0 group-hover:rotate-90 group-hover:opacity-100 text-white rotate-45 transition-all rounded-full duration-500 p-2 w-[30px] h-[30px] flex items-center justify-center">
                                                    <h1 className="text-4xl"><IoIosArrowRoundUp /></h1>
                                                  </span>
                                </div>
                            </div>
                        }
                        border
                    />
                </div>
            </div>
        </>
    )
}