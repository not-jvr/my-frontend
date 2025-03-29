import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[hsl(217,54%,11%)] p-4">
            <div className="flex flex-col items-start justify-center p-4 bg-[hsl(216,50%,16%)] rounded-lg w-[250px] gap-4 shadow-xl">
                <div className="relative w-full h-[200px] rounded-lg group">
                    <Image 
                        src="/images/12/image-equilibrium.jpg" 
                        alt="12"
                        fill
                        className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-[hsl(178,100%,50%,0.5)] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg cursor-pointer">
                        <Image 
                            src="/images/12/icon-view.svg" 
                            alt="view" 
                            width={40} 
                            height={40}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="text-white text-2xl font-bold cursor-pointer hover:text-[hsl(178,100%,50%)] transition-all duration-300">Equilibrium #3429</h1>
                    <p className="text-[hsl(215,51%,70%)] text-xs">Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Image src="/images/12/icon-ethereum.svg" alt="12" width={10} height={10} />
                        <p className="text-[hsl(178,100%,50%)] text-sm">0.041 ETH</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Image src="/images/12/icon-clock.svg" alt="12" width={10} height={10} />
                        <p className="text-[hsl(215,51%,70%)] text-sm">3 days left</p>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-center gap-2">
                    <Image src="/images/12/image-avatar.png" alt="12" width={20} height={20} />
                    <p className="text-[hsl(215,51%,70%)] text-sm">Creation of <span className="text-white text-xs cursor-pointer hover:text-[hsl(178,100%,50%)] transition-all duration-300">Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    )
}