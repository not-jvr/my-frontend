import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[hsl(212,45%,89%)]">
            <div className="flex flex-col items-center justify-center gap-3 p-3 bg-white rounded-lg shadow-md w-[200px]">
                <Image src="/images/07/image-qr-code.png" alt="07" width={100} height={100} className="rounded-lg w-[200px]" />
                <span className="text-sm text-[hsl(218,44%,22%)] font-bold text-center">Improve your front-end skills by building projects</span>
                <span className="text-xs text-[hsl(220,15%,55%)] text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</span>
            </div>
        </div>
    );
}
