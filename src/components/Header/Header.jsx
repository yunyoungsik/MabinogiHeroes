'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// components
import Nav from './Nav';
import Search from './Search';

const Header = () => {
  const pathName = usePathname();

  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full px-2 md:px-6 flex flex-col bg-mainColor">
        <div className="max-w-[1280px] w-full h-[66px] m-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="font-black uppercase">ON.KR</h1>
          </Link>
          {pathName !== '/' && (
            <div className="hidden md:block py-1 px-2 bg-customGrey300 rounded-3xl">
              <Search />
            </div>
          )}
          <Nav />
        </div>

        {pathName !== '/' && (
          <div className="block md:hidden w-fullpx-2 pb-2 bg-mainColor">
            <div className="bg-customGrey300 rounded-sm">
              <Search />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
