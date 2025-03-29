import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center h-screen justify-center bg-[hsl(225,100%,94%)]">
            <Image src="/images/08/pattern-background-desktop.svg" alt="08" width={100} height={100}
                className="absolute top-0 left-0 w-full" />

            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg max-w-[400px] z-10 text-center">
                <Image src="/images/08/illustration-hero.svg" alt="08" width={100} height={100}
                    className="rounded-t-lg w-full" />
                <div className="flex flex-col items-center justify-center gap-5 p-10">
                    <div className="flex flex-col items-center justify-center gap-2 px-2">
                        <h1 className="text-2xl font-bold text-[hsl(223,47%,23%)]">Order Summary</h1>
                        <p className="text-sm text-gray-500">You can now listen to millions of songs, audiobooks, and podcasts on any
                            device anywhere you like!</p>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full bg-[hsl(225,100%,98%)] p-3 rounded-lg">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <Image src="/images/08/icon-music.svg" alt="08" width={100} height={100}
                                className="w-8 h-8" />
                            <div className="flex flex-col items-center justify-center text-left">
                                <span className="text-sm text-[hsl(223,47%,23%)] font-bold">Annual Plan</span>
                                <span className="text-sm text-gray-500">$59.99/year</span>
                            </div>
                        </div>
                        <button className="text-sm text-[hsl(245,75%,52%)] cursor-pointer hover:text-[hsl(245,75%,62%)] hover:underline">Change</button>
                    </div>
                    <button className="text-sm text-white bg-[hsl(245,75%,52%)] rounded-lg p-2 w-full cursor-pointer hover:bg-[hsl(245,75%,62%)]">Proceed to Payment</button>
                    <button className="text-sm text-[hsl(224,23%,55%)] font-bold cursor-pointer hover:text-[hsl(224,23%,65%)]">Cancel Order</button>
                </div>

            </div>


        </div>
    );
}