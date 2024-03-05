import React from 'react';
import { nav } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="w-full h-[66px] flex items-center justify-center text-basicBlack font-bold">
        {nav.map((el, index) => (
          <li className='nav-active h-full flex items-center justify-center mr-2' key={index}>
            <Link href={el.href} className='w-full text-center'>{el.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
