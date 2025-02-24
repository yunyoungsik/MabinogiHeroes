'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/constants';

const Nav = () => {
  const pathName = usePathname();
  const [isShow, setIsShow] = useState(false);

  const toogleMenu = () => {
    setIsShow((prevShow) => !prevShow);
  };

  return (
    <>
      <nav className={`absolute top-[66px] right-[0] w-full h-[calc(100vh-66px)] bg-mainColor md:relative md:top-0 md:right-0 md:w-auto md:block md:h-auto ${isShow ? 'block' : 'hidden'}`}>
        <ul className="w-full h-[66px] flex items-end justify-center flex-col gap-4 md:gap-0 md:flex-row md:items-center text-[1rem]">
          {nav.map((el, index) => (
            <li key={el.name} className="h-[1rem] flex items-center justify-end px-[24px] md:justify-center md:px-0">
              <Link
                href={el.href}
                className={`text-center ${pathName === el.href ? 'font-bold' : ''}`}
              >
                {el.name}
              </Link>
              {index < nav.length - 1 && <span className="px-2 hidden md:inline-block">/</span>}
            </li>
          ))}
        </ul>
      </nav>
      <button type='button' onClick={toogleMenu} className="block md:hidden">
        {isShow ? <X /> : <Menu />}
      </button>
    </>
  );
};

export default Nav;
