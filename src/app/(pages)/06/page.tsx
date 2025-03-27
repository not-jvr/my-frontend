import Image from "next/image";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[hsl(221,100%,96%)]">
            <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-3xl max-w-[400px]">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5 bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] h-full gap-4 rounded-3xl">
                    <span className="text-[hsl(241,100%,89%)] text-xs">Your Result</span>
                    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[hsl(256,72%,46%)] to-[hsl(241,72%,46%)] w-[100px] h-[100px] rounded-full">
                        <span className="text-[hsl(0,0%,100%)] text-4xl">76</span>
                        <span className="text-[hsl(241,100%,89%)] text-xs">of 100</span>
                    </div>
                    <span className="text-[hsl(0,0%,100%)] text-2xl">Great</span>
                    <span className="text-[hsl(241,100%,89%)] text-center text-xs">Your performance exceeds 65% of the people conducting the test here!</span>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-left justify-between p-5 bg-white h-full rounded-r-3xl">
                    <span className="text-[hsl(224,30%,27%)] text-sm font-bold">Summary</span>
                    <div className="flex flex-col items-center justify-between gap-2">

                        <div className="flex flex-row items-center justify-between p-2 rounded-lg bg-[hsl(0,100%,67%,0.1)] w-full">
                            <div className="flex flex-row items-center justify-center gap-1">
                                <Image src="/images/06/icon-reaction.svg" alt="Reaction" width={20} height={20} />
                                <span className="text-[hsl(0,100%,67%)] font-bold text-xs">Reaction</span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className="text-[hsl(224,30%,27%)] text-xs"><strong>80</strong> / 100</span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between p-2 rounded-lg bg-[hsl(39,100%,56%,0.1)] w-full">
                            <div className="flex flex-row items-center justify-center gap-1">
                                <Image src="/images/06/icon-memory.svg" alt="Memory" width={20} height={20} />
                                <span className="text-[hsl(39,100%,56%)] font-bold text-xs">Memory</span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className="text-[hsl(224,30%,27%)] text-xs"><strong>80</strong> / 100</span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between p-2 rounded-lg bg-[hsl(166,100%,37%,0.1)] w-full">
                            <div className="flex flex-row items-center justify-center gap-1">
                                <Image src="/images/06/icon-verbal.svg" alt="Verbal" width={20} height={20} />
                                <span className="text-[hsl(166,100%,37%)] font-bold text-xs">Verbal</span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className="text-[hsl(224,30%,27%)] text-xs"><strong>80</strong> / 100</span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between p-2 rounded-lg bg-[hsl(234,85%,45%,0.1)] w-full">
                            <div className="flex flex-row items-center justify-center gap-1">
                                <Image src="/images/06/icon-visual.svg" alt="Visual" width={20} height={20} />
                                <span className="text-[hsl(234,85%,45%)] font-bold text-xs">Visual</span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className="text-[hsl(224,30%,27%)] text-xs"><strong>80</strong> / 100</span>
                            </div>
                        </div>

                    </div>
                    <button className="bg-[hsl(224,30%,27%)] text-white rounded-full p-2 w-full text-sm hover:bg-gradient-to-b hover:from-[hsl(252,100%,67%)] hover:to-[hsl(241,81%,54%)] transition-all duration-300 cursor-pointer">Continue</button>
                </div>
            </div>
        </div>
    )
}