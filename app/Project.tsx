import {ZentoTrigger} from "@/app/ZentoTrigger";
import {HiOutlineExternalLink} from "react-icons/hi";
import Image from "next/image";


export default function Project({onOpen}: {onOpen : () => void | null}){


    return (
    <>
        <div className="px-9 pt-9 space-y-5 w-2/3 flex justify-start flex-col ">
            <h2 className="text-4xl text-neutral-800 dark:text-neutral-400">Spotly</h2>
            <h1 className="text-2xl text-neutral-600 dark:text-neutral-200">Open Source Web Application</h1>
        </div>
        <div className={"grid-cols-3 grid grid-row-2 gap-4 p-5 w-2/3"}>
            <div className="col-span-1 col-row-1">
                <ZentoTrigger
                    hoverable={false}
                    content={
                        <div className="p-6 space-y-6 rounded-xl text-neutral-600 dark:text-neutral-200">
                            <div className="space-y-2">
                                <h2 className="text-xs uppercase text-neutral-500 font-semibold tracking-wider">Company</h2><p className="text-lg ">Fondation Miséricorde</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xs uppercase text-neutral-500 font-semibold tracking-wider">My Role</h2><p className="text-lg  ">Lead Developer</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xs uppercase text-neutral-500 font-semibold tracking-wider">Tools</h2>
                                <p className="text-lg ">Next.js</p>
                                <p className="text-lg ">HeroUi</p>
                                <p className="text-lg ">Tailwind</p>
                                <p className="text-lg ">Prisma</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xs uppercase text-neutral-500 font-semibold tracking-wider">Timeline</h2>
                                <p className="text-lg ">2024–2025</p>
                            </div>
                        </div>
                    }
                    action={onOpen}
                    border
                />
            </div>
            <div className="col-span-2 col-row-1">
                <ZentoTrigger
                    hoverable={false}
                    content={
                        <div className="p-6 space-y-8 text-neutral-900 dark:text-neutral-200 rounded-2xl h-full ">
                            <div className="space-y-2">
                                <h2 className="text-xs uppercase text-neutral-500 dark:text-neutral-500 font-semibold tracking-wider">Description</h2>
                                <p className="text-lg">
                                    A web application for managing resource reservations within the foundation.
                                </p>
                            </div>
                            <div className="space-y-2 text-neutral-500 dark:text-neutral-300">
                                <h2 className="text-xs uppercase text-neutral-500 font-semibold tracking-wider">Context</h2>
                                <p className="text-lg ">
                                    The platform allows users to book and track resources efficiently while ensuring managers maintain control over authorizations. Designed for automation and ease of use, the solution reduces administrative workload and enhances resource allocation.
                                </p>
                            </div>
                            <div className="pt-16 h-full">
                                <div onClick={()=>window.open("https://github.com/Lowouis/spotly")}
                                     className={"flex flex-row dark:text-neutral-300 justify-between items-center p-3 text-lg border-2 border-slate-500 border-opacity-20 text-neutral-900 transition duration-500  bg-neutral-200 dark:hover:bg-opacity-20  rounded-2xl hover:bg-opacity-75 bg-opacity-25 w-1/2"} >
                                    <span>Check the app</span>
                                    <span> <HiOutlineExternalLink  /></span>
                                </div>
                            </div>
                        </div>


                    }
                    action={onOpen}
                    border
                />
            </div>
            <div className="col-span-3 col-row-2 w-full rounded-2xl">
                <div className="w-full h-full rounded-2xl border-2 border-slate-600 border-opacity-20 dark:border-opacity-25 dark:bg-neutral-900">
                    <Image
                        src="/images/project.png"
                        alt="Spotly Illustration"
                        className="w-full h-full object-contain rounded-2xl bg-neutral-900"
                        width={1000}
                        height={500}
                    />
                </div>

            </div>
        </div>
        <div className="flex flex-col justify-center items-start w-3/5 p-7 space-y-14">
            <h2 className="text-4xl text-neutral-800 dark:text-neutral-400">Challenge</h2>
            <div className="text-xl text-neutral-600 dark:text-neutral-200">
                Managing reservations within the foundation was time-consuming and prone to errors, especially in tracking returns and assigning vehicles. The goal was to automate this process, minimizing human intervention while ensuring better traceability. The application needed to facilitate resource booking and monitoring while allowing managers to control authorizations.
            </div>

        </div>
        <div className="flex flex-col justify-center items-start w-3/5 p-7 space-y-14">
            <h2 className="text-4xl text-neutral-800 dark:text-neutral-400">Process</h2>
            <div className="text-xl text-neutral-600 dark:text-neutral-200">
                The project began with a needs analysis and technical constraints assessment, particularly LDAP and SSO integration. After evaluating existing solutions, an iterative development process was implemented, including testing and optimization phases. Progress was tracked using GitHub and internal collaboration tools.
            </div>

        </div>
        <div className="flex flex-col justify-center items-start w-3/5 p-7 space-y-14">
            <h2 className="text-4xl text-neutral-800 dark:text-neutral-400">Solution</h2>
            <div className="text-xl text-neutral-600 dark:text-neutral-200">
                The application enables autonomous reservation management, tracks returns, and automatically assigns late penalties. Each manager can oversee resources and set access restrictions. Authentication is streamlined via SSO, and the open-source nature allows continuous improvements.
            </div>

        </div>
        <div className="flex flex-col justify-center items-start w-3/5 p-7 space-y-14">
            <h2 className="text-4xl text-neutral-800 dark:text-neutral-400">Takeaway & Reflection</h2>
            <div className="text-xl text-neutral-600 dark:text-neutral-200">
                This project strengthened my autonomy and resource optimization skills. In hindsight, I would have prioritized backend optimization over frontend enhancements. The application significantly reduced the IT team’s workload while improving organizational efficiency.
            </div>

        </div>
    </>
    )
}