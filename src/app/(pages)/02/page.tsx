import Image from "next/image";

export default function SecondPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[hsl(0,0%,8%)]">
            <div className="flex flex-col items-center justify-center bg-[hsl(0,0%,12%)] p-6 rounded-lg gap-[12px]">
                <Image src="/images/02/avatar-jessica.jpeg" alt="image-avatar" width={64} height={64} className="rounded-full" />
                <span className="text-white text-[20px] font-bold">Jessica Randall</span>
                <span className="text-[hsl(75,94%,57%)] text-[14px] mt-[-8px]">London, United Kingdom</span>
                <span className="text-white text-[14px]">"Front-end developer and avid reader."</span>
                <button className="bg-[hsl(0,0%,20%)] p-2 rounded-lg cursor-pointer text-[14px] w-full hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-300">
                    Github
                </button>
                <button className="bg-[hsl(0,0%,20%)] p-2 rounded-lg cursor-pointer text-[14px] w-full hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-300">
                    Frontend Mentor
                </button>
                <button className="bg-[hsl(0,0%,20%)] p-2 rounded-lg cursor-pointer text-[14px] w-full hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-300">
                    Linkedin
                </button>
                <button className="bg-[hsl(0,0%,20%)] p-2 rounded-lg cursor-pointer text-[14px] w-full hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-300">
                    Twitter
                </button>
                <button className="bg-[hsl(0,0%,20%)] p-2 rounded-lg cursor-pointer text-[14px] w-full hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-300">
                    Instagram
                </button>
            </div>
        </div>
    );
}