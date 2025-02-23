'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SocialLogo({ color = "neutral", border = true, icon, url }: { color?: string, border?: boolean, icon: string, url: string }) {
    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        if (url.endsWith(".svg")) {
            fetch(url)
                .then(response => response.text())
                .then(data => setSvgContent(data))
                .catch(error => console.error("Error fetching SVG:", error));
        }
    }, [url]);

    return (
        <div
            onClick={() => url !== "" && window.open(url)}
            className={`hover:bg-${color}-400 transition duration-500 bg-transparent dark:invert text-neutral-800 text-5xl hover:bg-opacity-20 font-bold uppercase rounded-2xl p-2 h-full justify-center items-center flex ${border && "border border-1 border-black border-opacity-25"}`}>
            {svgContent ? (
                <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            ) : (
                <Image
                    src={icon}
                    alt={icon}
                    width={70}
                    height={70}
                />
            )}
        </div>
    );
}