'use client';
import {ZentoTrigger} from "@/app/ZentoTrigger";
import React, { useEffect } from "react";
import {IoIosArrowRoundUp} from "react-icons/io";
import {
    CiInstagram,
    CiYoutube,
    CiLinkedin,
    CiTwitter as CiX,
} from "react-icons/ci";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import SwitchTheme from "@/app/components/SwitchTheme";
import MarqueeIcon from "@/app/components/IconsCarousel";
import ClipboardComponent from "@/app/components/ClipboardComponent";
import ModalWindow from "@/app/components/ModalWindow";
import Projects from "@/app/Projects";
import About from "@/app/About";
import {useDisclosure} from "@heroui/react";
import {getTotalCommits} from "@/app/utils/github";
import { NumberTicker } from "@/components/magicui/number-ticker";
import Project from "@/app/Project";
import Image from "next/image";

export default function Home() {
  const {isOpen : isProjectOpen , onOpen : onOpenProject, onOpenChange : onOpenChangeProject} = useDisclosure();
  const {isOpen : isProjectsOpen , onOpen : onOpenProjects, onOpenChange : onOpenChangeProjects} = useDisclosure();
  const {isOpen : isAboutOpen , onOpen : onOpenAbout, onOpenChange : onOpenChangeAbout} = useDisclosure();


  const [totalCommits, setTotalCommits] = React.useState<number>(0);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const { total_commits } = await getTotalCommits('Lowouis', "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");
        setTotalCommits(total_commits);
      } catch (error) {
        console.error('Error fetching GitHub commits:', error);
      }
    };
    
    fetchCommits();
  }, []);



    return (
      <main className="h-screen w-screen flex items-center justify-center p-2">
        <div className="w-full h-full border-4 border-gray-800 dark:border-gray-400 dark:border-opacity-20 border-opacity-10 rounded-3xl p-1  bg-white dark:bg-neutral-900 dark:bg-opacity-70 bg-opacity-10">
            <div className="grid grid-cols-5 grid-rows-5 gap-2 h-full">
                <div className="col-span-4 row-span-5 h-full ">
                    <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full">
                        <div className="col-span-2">
                            {/* Carte Profil */}
                            <ZentoTrigger
                                hoverable={false}
                                border={true}
                                content={
                                    <div className="flex justify-center items-start flex-col h-full space-y-5 rounded-2xl p-7 ">
                                        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">Hi, I&apos;m Louis —</h1>
                                        <h2 className="text-2xl text-neutral-600 dark:text-neutral-300">Developer, currently working at <span className="underline">Fondation Miséricorde</span> based in <span className="font-bold"> Caen</span>
                                        </h2>
                                    </div>
                                }
                            />
                        </div>
                        <div className="col-span-2 col-start-3 ">
                            <ZentoTrigger
                                border={false}
                                content={
                                    <div className="relative group w-full h-full overflow-hidden rounded-2xl shadow-lg">
                                        <Image
                                            src="/images/projet1.png"
                                            alt="Spotly Project"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:brightness-50 scale-105 group-hover:scale-100"
                                        />
                                        <div className="absolute flex flex-row justify-between items-center px-4 rounded-full bottom-0 translate-y-14 left-0 w-full text-neutral-100 dark:text-neutral-100 py-2 text-3xl font-semibold transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-5">
                                            <h1 className="text-left">Spotly</h1>
                                            <span
                                                className="inner-span transform opacity-0 group-hover:rotate-90 group-hover:opacity-100 text-white rotate-45 transition-all rounded-full duration-500 p-2 w-[30px] h-[30px] flex items-center justify-center">
                                                <h1 className="text-4xl"><IoIosArrowRoundUp /></h1>
                                              </span>
                                        </div>
                                    </div>
                                }
                                action={onOpenChangeProject}
                            />
                        </div>
                        <div className="row-start-2">
                            <ZentoTrigger
                                border={false}
                                content={
                                    <div className="relative group w-full h-full rounded-2xl shadow-lg">
                                        <Image
                                            src="/images/pp1.JPG"
                                            alt="Profile Photo"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover rounded-2xl transition-all duration-500 "
                                        />
                                    </div>
                                }
                            />
                        </div>
                        <div className="col-span-3 row-start-2 ">
                            <ZentoTrigger
                                action={onOpenAbout}
                                border={true}
                                content={
                                    <div className="flex justify-start items-start h-full space-y-5 rounded-xl p-7 m-0 flex-row ">
                                        <div className={"flex flex-col space-y-8 w-full"}>
                                            <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-wide dark:text-neutral-200">about</h1>
                                            <h2 className="text-2xl text-neutral-700 dark:text-neutral-300">Passionate about new technologies
                                                and enjoy solving problems.</h2>
                                        </div>
                                        <div className={"flex items-end justify-end text-6xl h-full text-neutral-600 dark:text-neutral-400"}>
                                            <IoIosArrowRoundUp className="group-hover:rotate-45 rotate-90 transition duration-500" />
                                        </div>

                                    </div>
                                }
                            />
                        </div>
                        <div className="col-span-2 row-start-3 ">
                            <ZentoTrigger
                                border={true}
                                hoverable={false}
                                content={
                                    <div className="flex justify-start items-start h-full space-y-5 rounded-2xl m-0 flex-row py-2">
                                        <div className={"flex flex-col space-y-8 w-full h-full items-start "}>
                                            <MarqueeIcon direction={"right"} />
                                        </div>

                                    </div>
                                }
                            />
                        </div>
                        <div className="col-start-3 row-start-3 ">
                            <ZentoTrigger
                                border={true}
                                hoverable={false}
                                content={
                                    <div className="flex justify-center items-center h-full space-y-5 rounded-xl m-0 flex-row p-6">
                                        <div className={"flex flex-col space-y-2 w-full justify-center items-center"}>
                                            <h1 className="text-6xl font-bold text-neutral-800 uppercase tracking-wide dark:text-neutral-200">
                                              <NumberTicker
                                                    value={totalCommits}
                                                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
                                                    />
                                            </h1>
                                            <div className={"flex flex-row items-center justify-center"}>
                                            
                                                <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-wide dark:text-neutral-200">commits</h1>
                                            </div>

                                        </div>

                                    </div>
                                }
                            />
                        </div>
                        <div className="col-start-4 row-start-3 ">
                            <ZentoTrigger
                                border={true}
                                hoverable={false}
                                content={
                                    <div className="flex justify-start items-start h-full space-y-5 rounded-xl p-7 m-0 flex-row ">
                                        <div className="flex items-center justify-center w-full h-full">
                                            <SwitchTheme />
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="row-span-5 col-start-5 ">
                    <div className="grid grid-cols-1 grid-rows-5 gap-2 h-full">
                        <div className=" w-full h-full row-span-1 p-1">
                            <div className="flex items-center justify-center h-1/2">
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 flex istems-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300"
                                       href="https://media.licdn.com/dms/image/v2/D4E22AQGcX9hQTjtmiw/feedshare-shrink_1280/B4EZTryM4zGYAk-/0/1739122594595?e=1743033600&v=beta&t=QLmi51h6t-OoiPld9jsCcrz_M2xUv_rIbA3hY3gEn0Y"
                                       target="_blank"
                                    >
                                        <PiReadCvLogoDuotone className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a>
                                </div>
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 items-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300" href="https://www.instagram.com/louis.gurita/" target="_blank">
                                        <CiInstagram className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a> 
                                </div>
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 flex items-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300" href="https://www.github.com/Lowouis/" target="_blank">
                                        <CiX className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a> 
                                </div>
                            </div>
                            <div className="flex items-center justify-center h-1/2 ">
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 flex items-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300" href="https://www.youtube.com/@louisgurita" target="_blank">
                                        <CiYoutube className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a>
                                </div>
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 flex items-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300" href="https://www.x.com/louisgurita" target="_blank">
                                        <CiX className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a>
                                </div>
                                <div className="aspect-square flex items-center justify-center p-1 w-1/3">
                                    <a className="p-4 flex items-center justify-center rounded-2xl bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 border border-neutral-800 dark:border-neutral-700 transition duration-300" href="https://www.linkedin.com/in/louisgurita/" target="_blank">
                                        <CiLinkedin className="text-5xl text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={onOpenProjects}
                            className="h-full row-span-2">
                            <ZentoTrigger
                                action={onOpenChangeProjects}
                                border={true}
                                content={
                                    <div
                                        className="flex justify-start items-start h-full space-y-5 rounded-xl p-7 m-0 flex-row ">
                                        <div className={"flex flex-col space-y-8 w-full"}>
                                            <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-wide dark:text-neutral-200">projects</h1>
                                            <h2 className="text-2xl text-neutral-700 dark:text-neutral-300">Differents projects that I worked for.</h2>
                                        </div>
                                        <div className={"flex items-end justify-end text-6xl h-full text-neutral-600 dark:text-neutral-400"}>
                                            <IoIosArrowRoundUp className="group-hover:rotate-45 rotate-90 transition duration-500" />
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    
                        <div className="h-full row-span-2">
                            <ZentoTrigger
                                border={true}
                                hoverable={false}
                                content={
                                    <div className="flex justify-center items-center h-full space-y-6 rounded-2xl p-2 m-0 flex-col ">
                                        <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-wide dark:text-neutral-200">Have a project in mind ?</h1>
                                        <ClipboardComponent />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* All Modals */}
      <ModalWindow
        isOpen={isProjectOpen}
        onOpenChange={onOpenChangeProject}
      >
        <Project onOpen={onOpenProject} />
      </ModalWindow>

      <ModalWindow
        isOpen={isProjectsOpen}
        onOpenChange={onOpenChangeProjects}
      >
        <Projects />
      </ModalWindow>

      <ModalWindow
        isOpen={isAboutOpen}
        onOpenChange={onOpenChangeAbout}
      >
        <About />
      </ModalWindow>
      </main>
    );
}
