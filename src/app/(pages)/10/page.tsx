import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[hsl(257,40%,49%)] p-20">
            <Image src="/images/10/bg-desktop.svg" alt="10" width={100} height={100} className="w-full h-full object-cover absolute top-0 left-0" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 z-10">
                <div className="flex flex-1 flex-col items-center md:items-start justify-center">
                    <Image src="/images/10/logo.svg" alt="10" width={100} height={100} className="w-[100px] h-[100px]" />
                    <Image src="/images/10/illustration-mockups.svg" alt="10" width={100} height={100} className="w-full h-full" />
                </div>
                <div className="flex flex-1 flex-col items-center md:items-start justify-center gap-5">
                    <h1 className="text-white text-4xl font-bold">Build The Community Your Fans Will Love</h1>
                    <p className="text-white text-xl">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button className="bg-white text-black px-10 py-2 rounded-full cursor-pointer hover:bg-[hsl(300,69%,71%)] hover:text-white transition-all duration-300">Register</button>
                </div>
            </div>
        </div>
    )
}