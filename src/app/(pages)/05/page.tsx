'use client'
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (selectedNumber !== null) {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[hsl(216,12%,8%)]">
                <div className="flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg w-[327px] gap-[16px] bg-gradient-to-t from-[hsl(216,12%,8%)] to-[hsl(216,12%,27%)]">
                    <Image src="/images/05/illustration-thank-you.svg" alt="thank you" width={100} height={100} />
                    <p className="text-[hsl(25,97%,53%)] px-3 py-1 rounded-full bg-[hsl(216,12%,27%)] text-sm">You selected {selectedNumber} out of 5</p>
                    <h1 className="text-white text-2xl font-bold">Thank you!</h1>
                    <p className="text-white text-sm text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[hsl(216,12%,8%)]">
            <div className="flex flex-col items-start justify-start p-6 rounded-3xl shadow-lg w-[327px] gap-[24px] bg-gradient-to-t from-[hsl(216,12%,8%)] to-[hsl(216,12%,27%)]">
                <div className="p-3 bg-[hsl(216,12%,27%)] rounded-full">
                    <Image src="/images/05/icon-star.svg" alt="star" width={14} height={14} />
                </div>
                <span className="text-white text-2xl font-bold">How did we do?</span>
                <p className="text-white text-sm">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="flex flex-row gap-[12px] justify-between w-full">
                    {[1, 2, 3, 4, 5].map((number) => (
                        <button
                            key={number}
                            onClick={() => setSelectedNumber(number)}
                            className={`cursor-pointer rounded-full w-[42px] h-[42px] transition-all duration-300
                                ${selectedNumber === number
                                    ? 'bg-[hsl(25,97%,53%)] text-white'
                                    : 'bg-[hsl(216,12%,27%)] text-white hover:bg-[hsl(25,97%,53%)]'
                                }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className="p-3 bg-[hsl(25,97%,53%)] text-white rounded-full w-full cursor-pointer hover:bg-[hsl(216,12%,27%)] transition-all duration-300"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}