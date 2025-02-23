import Marquee from "react-fast-marquee";
import SocialLogo from "@/app/components/SocialLogo";
import React from "react";


const slugs = [
    "typescript",
    "javascript",
    "react",
    "prisma",
    "postgresql",
    "nginx",
    "vercel",
    "git",
    "github",
    "gitlab",
    "figma",
];



export default function MarqueeIcon({direction} : {direction?: "left" | "right" | "up" | "down" | undefined}) {
    return (
        <div
            className="flex w-full items-start flex-col justify-end h-full overflow-hidden">
            <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-wide px-6 w-full h-1/3 dark:text-neutral-200 flex items-end pb-2">
                stack i use
            </h1>
            <Marquee
                className=" h-2/3 w-full items-start pt-5 "
                speed={15}
                loop={1}
                gradient={false}
                direction={direction}
            >
                {slugs.map((slug, index) => (
                    <SocialLogo
                        key={slug+"-"+index}
                        border={false}
                        icon={`https://cdn.simpleicons.org/${slug}/${slug}}`}
                        url={""}
                    />
                ))}
            </Marquee>
        </div>
    );
}
