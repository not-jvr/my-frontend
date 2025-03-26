"use client"

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <div className=" bg-[hsl(30,38%,92%)] h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-stretch justify-center bg-white rounded-lg max-w-xl">
                <div className="w-full md:w-1/2">
                    <Image
                        src={isMobile ? "/images/04/image-product-mobile.jpg" : "/images/04/image-product-desktop.jpg"}
                        alt="product"
                        width={200}
                        height={200}
                        className="rounded-t-lg md:rounded-t-none md:rounded-l-lg w-full h-full object-cover"
                    />
                    
                </div>
                <div className="flex flex-col gap-6 items-start md:justify-between w-full md:w-1/2 p-6">
                    <span className="text-[hsl(228,12%,48%)] text-sm tracking-[0.4em]">PERFUME</span>
                    <span className="text-[hsl(212,21%,14%)] text-3xl font-bold">GRABRIELLE ESSENCE EAU DE PARFUM</span>
                    <span className="text-[hsl(228,12%,48%)] text-sm">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</span>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-[hsl(158,36%,37%)] text-3xl font-bold">$149.99</span>
                        <span className="text-[hsl(228,12%,48%)] text-sm line-through">$169.99</span>
                    </div>
                    <button className="bg-[hsl(158,36%,37%)] text-white px-4 py-2 rounded-md w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-[hsl(158,42%,18%)] transition-all duration-300">
                        <Image
                            src="/images/04/icon-cart.svg"
                            alt="cart icon"
                            width={16}
                            height={16}
                        />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}