'use client';

import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[66px] px-6 bg-mainColor">
      <div className="max-w-[1280px] h-full m-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="font-black text-mainBlack uppercase">ON.KR</h1>
        </Link>
        {pathName !== '/' && (
          <div className="py-1 px-2 bg-mainBlack rounded-3xl">
            <Search />
          </div>
        )}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
