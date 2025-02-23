import React from "react";


interface ZentoTriggerProps {
    content: React.ReactNode,
    border?: boolean,
    action?: () => void | null,
    hoverable? : boolean
}

export const ZentoTrigger: React.FC<ZentoTriggerProps> = ({ content, border, action = null, hoverable = true }) => {
    return (
        <div
            onClick={() => {
                if(action !== null){
                    action();
                }
            }}
            className={`bg-white dark:bg-neutral-800 ${hoverable && "hover:bg-neutral-500 dark:hover:bg-neutral-900 hover:bg-opacity-10"} transition duration-500 ${border && "border border-neutral-200 dark:border-neutral-700"} rounded-2xl h-full group w-full transition-all duration-500`}>
            {content}
        </div>
    );
}
