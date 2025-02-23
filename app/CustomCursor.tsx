'use client';
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e:MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-6 h-6 bg-gray-200 rounded-full pointer-events-none transition-transform duration-75 ease-out mix-blend-difference z-[9999]"
            style={{
                transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
            }}
        />
    );
}