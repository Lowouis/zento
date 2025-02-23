import { Globe } from "@/components/magicui/globe";


export default function Experimental404() {
    return (
        <div className="h-screen bg-black cursor-crosshair "
        >
            {/* Pixel swarm overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {Array(Math.round(Math.random() * 500)).fill(0).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-white opacity-50 rounded-full transition-all`}
                        style={{
                            transform: `translate(${Math.random() * 100}vw, ${Math.random() * 100 }vh) scale(${Math.random() * (1.5 - 0.25) + 0.5})`,
                            animation : `pulse ${Math.random() * (6 - 0.2) + 1}s infinite`
                        }}
                    />
                ))}
            </div>

        <Globe

            className="absolute  h-screen" />
            <div className="flex flex-col justify-start items-center h-screen w-screen ">
                <h1 className="opacity-100 text-center text-[10em]">404</h1>
            </div>
        </div>
    );
}