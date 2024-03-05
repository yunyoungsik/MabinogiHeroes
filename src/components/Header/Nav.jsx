'use client'

import React, { useEffect, useState } from 'react';
import { nav } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  const [currentPathname, setCurrentPathname] = useState(undefined);
  const pathname = window.location.pathname;

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <nav>
      <ul className="w-full h-[66px] flex items-center justify-center text-basicBlack font-bold">
        {nav.map((el, index) => (
          <li className={el.href === currentPathname ? 'nav-active h-full flex items-center justify-center mr-2' : 'h-full flex items-center justify-center mr-2'} key={index}>
            <Link href={el.href} className='w-full text-center'>{el.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
