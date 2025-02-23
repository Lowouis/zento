import Image from 'next/image';

export default function SocialIcon({ img }: { img: string }) {

    return (
        <div className={`hover:bg-neutral-400 transition duration-500 bg-transparent text-neutral-800 text-5xl font-bold uppercase border rounded-2xl p-2 h-full justify-center items-center flex border-1 border-black border-opacity-25`}>
            <Image 
                src={img} 
                alt="Social media icon"
                width={32}
                height={32}
            />
        </div>
    )
}