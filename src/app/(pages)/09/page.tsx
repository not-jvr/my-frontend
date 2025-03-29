import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center p-8 min-h-screen">
            <div className="flex flex-col md:flex-row items-stretch justify-center w-[300px] md:w-[800px] rounded-lg overflow-hidden">
                <div className="flex-1 flex flex-col items-left justify-between bg-[hsl(31,77%,52%)] p-8 gap-4">
                    <Image src="/images/09/icon-sedans.svg" alt="09" width={100} height={100} className="w-10" />
                    <h1 className="text-2xl font-bold ">SEDANS</h1>
                    <p className="text-sm text-gray-500">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                        or on your next road trip.</p>
                    <button className="bg-white px-4 py-2 rounded-full w-fit text-sm text-[hsl(31,77%,52%)] mt-10 cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300">Learn More</button>
                </div>
                <div className="flex-1 flex flex-col items-left justify-between bg-[hsl(184,100%,22%)] p-8 gap-4">
                    <Image src="/images/09/icon-suvs.svg" alt="09" width={100} height={100} className="w-10" />
                    <h1 className="text-2xl font-bold ">SUVS</h1>
                    <p className="text-sm text-gray-500">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                        and off-road adventures.</p>
                    <button className="bg-white px-4 py-2 rounded-full w-fit text-sm text-[hsl(184,100%,22%)] mt-10 cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300">Learn More</button>
                </div>
                <div className="flex-1 flex flex-col items-left justify-between bg-[hsl(179,100%,13%)] p-8 gap-4">
                    <Image src="/images/09/icon-luxury.svg" alt="09" width={100} height={100} className="w-10" />
                    <h1 className="text-2xl font-bold ">LUXURY</h1>
                    <p className="text-sm text-gray-500">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                        rental and arrive in style.</p>
                    <button className="bg-white px-4 py-2 rounded-full w-fit text-sm text-[hsl(179,100%,13%)] mt-10 cursor-pointer hover:bg-transparent hover:text-white transition-all duration-300">Learn More</button>
                </div>
            </div>
        </div>
    )
}