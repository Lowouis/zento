import {FaArrowRight} from "react-icons/fa";
import React from "react";




export default function ArrowAnimated() {

return (
    <div>
        <span className="inner-span transform text-black rotate-45 transition-transform rounded-full border-2 border-opacity-50 border-black p-2 w-[50px] h-[50px] flex items-center justify-center">
            <FaArrowRight />
        </span>
    </div>
)
    }