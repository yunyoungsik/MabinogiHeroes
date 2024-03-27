'use client'

import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[66px] px-6 border-b-2 border-solid border-b-borderColor bg-[#202124] uppercase">
      <div className='max-w-[1280px] h-full m-auto flex items-center justify-between'>
        <Link href="/">
          <h1 className="font-bold text-white uppercase">mangjeun</h1>
        </Link>
        {/* <Nav /> */}
        {pathName === '/' ? '':
           <div className='max-w-[800px] border-2 border-borderColor rounded-xl bg-[#303134]'>
           <Search />
         </div>
        }
      </div>
    </header>
  );
};

export default Header;
