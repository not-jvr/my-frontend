import Link from 'next/link';
import { FC } from 'react';

interface ButtonRedirectProps {
  name: string;
  path: string;
}

const ButtonRedirect: FC<ButtonRedirectProps> = ({ name, path }) => {
  return (
    <Link href={path} className="w-full">
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full cursor-pointer text-center"
      >
        {name}
      </button>
    </Link>
  );
}

export default ButtonRedirect;
