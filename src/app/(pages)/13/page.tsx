import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[hsl(185,75%,39%)] relative overflow-hidden">
            {/* Background patterns */}
            <div 
                className="absolute -top-[500px] -left-[400px] w-[978px] h-[978px] bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/13/bg-pattern-top.svg')"
                }}
            />
            <div 
                className="absolute -bottom-[500px] -right-[400px] w-[978px] h-[978px] bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/13/bg-pattern-bottom.svg')"
                }}
            />

            {/* Card container */}
            <div className="w-[300px] bg-white rounded-lg overflow-hidden relative z-10">
                {/* Header section with background */}
                <div 
                    className="h-[140px] bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/images/13/bg-pattern-card.svg')"
                    }}
                />
                
                {/* Profile section */}
                <div className="flex flex-col items-center -mt-12">
                    <Image 
                        src="/images/13/image-victor.jpg" 
                        alt="image-victor" 
                        width={96} 
                        height={96} 
                        className="rounded-full border-[5px] border-white"
                    />

                    <div className="flex flex-col items-center justify-center mt-4 mb-4">
                        <div className="flex flex-row items-center justify-center gap-4">
                            <h1 className="text-2xl font-bold text-[hsl(229,23%,23%)]">Victor Crest</h1>
                            <p className="text-m text-[hsl(0,0%,59%)]">26</p>
                        </div>
                        <p className="text-sm text-[hsl(0,0%,59%)]">London</p>
                    </div>

                    <div className="flex flex-row items-center border-t border-text-[hsl(0,0%,59%)] w-full px-8 py-4 justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-xl text-[hsl(229,23%,23%)] font-bold">80K</p>
                            <p className="text-xs text-[hsl(0,0%,59%)]">Followers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-xl text-[hsl(229,23%,23%)] font-bold">803K</p>
                            <p className="text-xs text-[hsl(0,0%,59%)]">Likes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-xl text-[hsl(229,23%,23%)] font-bold">1.4K</p>
                            <p className="text-xs text-[hsl(0,0%,59%)]">Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}