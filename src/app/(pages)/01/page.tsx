import Image from 'next/image';

export default function FirstPage() {
    return (
        <div className="bg-[#F4D04E] flex flex-col items-center justify-center h-screen">
            <div className="group bg-white p-6 rounded-[20px] border-[1px] border-black max-w-[384px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <Image src="/images/01/illustration-article.svg" width={100} height={100} alt="illustration-article" className="w-full h-auto rounded-[10px] mb-[24px]" />
                <div className="flex flex-col gap-[12px] mb-[24px]">
                    <span className="w-fit text-black text-[14px] font-bold bg-[#F4D04E] px-[12px] py-[4px] rounded-[4px]">
                        Learning
                    </span>
                    <span className="text-black text-[14px]">
                        Published 21 Dec 2023
                    </span>
                    <span className="text-black text-[24px] font-bold group-hover:text-[#F4D04E] transition-all duration-300">
                        HTML & CSS foundations
                    </span>
                    <span className="text-[#6B6B6B] text-[16px]">
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </span>
                </div>
                <div className="flex flex-row gap-[12px] items-center">
                    <Image src="/images/01/image-avatar.webp" width={32} height={32} alt="arrow-right" className="w-auto h-auto" />
                    <span className="text-black text-[14px] font-bold">
                        Greg Hooper
                    </span>
                </div>
            </div>
        </div>
    );
}