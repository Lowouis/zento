"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {PiPaperclip} from "react-icons/pi";
import {IoCheckmarkOutline} from "react-icons/io5";

export default function ClipboardComponent() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("louisguritapro@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 4000);
        } catch (error) {
            console.error("Erreur lors de la copie", error);
        }
    };

    return (
        <div className="flex items-center space-x-2 w-full">
            <Button
                onClick={handleCopy}
                className="flex items-center hover:bg-opacity-35
                bg-opacity-30 dark:bg-neutral-700 dark:hover:bg-neutral-600 bg-neutral-200 text-lg w-full
                h-14 rounded-2xl text-neutral-500 dark:text-neutral-400 cursor-none"
            >
                {copied ? "Copied" : "Copy email"}
                {copied ? <IoCheckmarkOutline /> : <PiPaperclip className="dark:" />}
            </Button>
        </div>
    );
}
