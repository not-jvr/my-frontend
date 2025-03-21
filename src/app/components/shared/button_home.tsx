import Link from 'next/link';

const ButtonHome = () => {
    return (
        <Link href="/">
            <button
                className=" bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                Volver
            </button>
        </Link>
    );
};

export default ButtonHome;
