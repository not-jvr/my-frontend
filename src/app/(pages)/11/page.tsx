import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[hsl(233,47%,7%)]">
            <div className="flex flex-col-reverse md:flex-row items-stretch justify-center p-10 w-[400px] md:w-[800px] ">
                <div className="flex flex-col flex-1 items-start justify-center bg-[hsl(244,38%,16%)] p-10 gap-4 rounded-b-3xl md:rounded-b-none md:rounded-l-3xl md:rounded-bl-3xl">
                    <h1 className="text-white text-4xl font-bold">
                        Get
                        <span className="text-[hsl(277,64%,61%)]"> insights </span>
                        that help your business grow.
                    </h1>
                    <p className="text-[hsla(0,0%,100%,0.75)] text-xs">
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                    </p>
                    <div className="flex flex-row items-start justify-center gap-4 mt-8">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-white text-2xl font-bold">10k+</h2>
                            <p className="text-[hsla(0,0%,100%,0.75)] text-xs">COMPANIES</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-white text-2xl font-bold">314</h2>
                            <p className="text-[hsla(0,0%,100%,0.75)] text-xs">TEMPLATES</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-white text-2xl font-bold">12M+</h2>
                            <p className="text-[hsla(0,0%,100%,0.75)] text-xs">QUERIES</p>
                        </div>

                    </div>
                </div>

                <div className="relative bg-[hsl(277,64%,61%)] min-h-[250px] md:flex-1 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl overflow-hidden">
                    <Image
                        src="/images/11/image-header-desktop.jpg"
                        alt="11"
                        fill
                        priority
                        className="object-cover mix-blend-multiply"
                    />
                </div>

            </div>
        </div>
    )
}