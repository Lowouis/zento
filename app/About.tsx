import React from 'react';
import { BlurFade } from "@/components/magicui/blur-fade";
import { ZentoTrigger } from "@/app/ZentoTrigger";
import MarqueeIcon from "@/app/components/IconsCarousel";

export default function About() {
    return (
        <div className="bg-noise w-full h-screen dark:bg-neutral-900 rounded-2xl p-8">
            <div className="grid grid-cols-4 grid-rows-6 gap-4 h-full w-4/5 mx-auto p-4 pt-16">
                {/* 1: My Story */}
                <div className="col-span-2 row-span-2">
                    <BlurFade delay={0.2} className="h-full">
                        <ZentoTrigger
                            hoverable={false}
                            border={true}
                            content={
                                <div className="p-6 space-y-4 h-full">
                                    <h3 className="text-xs uppercase text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider">What I&apos;m about?</h3>
                                    <br/>
                                    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                        I am a passionate full-stack developer focused on creating innovative web applications.
                                    </p>
                                </div>
                            }
                        />
                    </BlurFade>
                </div>

                {/* 2: Experience */}
                <div className="col-span-2 row-span-2 col-start-3">
                    <BlurFade delay={0.3} className="h-full">
                        <ZentoTrigger
                            hoverable={false}
                            border={true}
                            content={
                                <div className="p-6 space-y-4 h-full">
                                    <h3 className="text-xs uppercase text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider">EXPERIENCE</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-neutral-800 dark:text-neutral-200">Developer</p>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Fondation Miséricorde</p>
                                            </div>
                                            <p className="text-neutral-500 dark:text-neutral-400">Current</p>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-neutral-800 dark:text-neutral-200">IT Support & Developer</p>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">SAP LABS France</p>
                                            </div>
                                            <p className="text-neutral-500 dark:text-neutral-400">2021 - 2024</p>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-neutral-800 dark:text-neutral-200">Integration & Consulting</p>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Allkeyshop</p>
                                            </div>
                                            <p className="text-neutral-500 dark:text-neutral-400">2022</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </BlurFade>
                </div>

                {/* 3: What I Do Best */}
                <div className="col-span-2 row-span-2 col-start-3 row-start-3">
                    <BlurFade delay={0.4} className="h-full">
                        <ZentoTrigger
                            hoverable={false}
                            border={true}
                            content={
                                <div className="p-6 space-y-4 h-full">
                                    <h3 className="text-xs uppercase text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider">WHAT I DO BEST</h3>
                                    <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                        Development of complete web applications, from design to production, 
                                        using modern technologies and industry best practices.
                                    </p>
                                </div>
                            }
                        />
                    </BlurFade>
                </div>

                {/* 5: Education */}
                <div className="col-span-2 row-span-4 col-start-1 row-start-3">
                    <BlurFade delay={0.6} className="h-full">
                        <ZentoTrigger
                            hoverable={false}
                            border={true}
                            content={
                                <div className="p-6 space-y-4 h-full overflow-y-auto">
                                    <h3 className="text-xs uppercase text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider">EDUCATION</h3>
                                    <div className="space-y-4">
                                        <div className="mb-3">
                                            <p className="text-neutral-800 dark:text-neutral-200">Bachelor&apos;s in STS</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">CaenSup Saint Ursule</p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">2024 - 2025</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-neutral-800 dark:text-neutral-200">BTS SIO</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">CaenSup Saint Ursule</p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">2022 - 2024</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-neutral-800 dark:text-neutral-200">Computer Science Degree</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">UFR Caen</p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">2018 - 2022</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-neutral-800 dark:text-neutral-200">Baccalauréat sciences et technologies du management et de la gestion</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Alfred Kastler High School</p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">2018</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </BlurFade>
                </div>

                {/* 6: Technologies */}
                <div className="row-span-2 col-span-2 col-start-3 row-start-5">
                    <BlurFade delay={0.7} className="h-full">
                        <ZentoTrigger
                            border={true}
                            hoverable={false}
                            content={
                                <div className="h-full flex items-center justify-center py-2">
                                    <MarqueeIcon direction="left" />
                                </div>
                            }
                        />
                    </BlurFade>
                </div>
            </div>
        </div>
    );
}
