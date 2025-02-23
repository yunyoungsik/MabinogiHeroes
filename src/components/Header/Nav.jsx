import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/constants';

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="w-full h-[66px] flex items-center justify-center text-[1rem] text-mainBlack">
        {nav.map((el, index) => (
          <li key={el.name} className="h-[1rem] flex items-center justify-center">
            <Link
              href={el.href}
              className={`w-full text-center ${pathName === el.href ? 'font-bold' : ''}`}
            >
              {el.name}
            </Link>
            {index < nav.length - 1 && <span className='px-2'>/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
