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
      <header className="sticky top-0 left-0 z-50 w-full md:px-6 bg-mainColor">
        <div className="relative z-50 max-w-[1280px] w-full h-[66px] mx-auto flex items-center justify-between">
          <Link href="/" aria-label="홈으로 이동">
            <h1 className="font-black px-2 uppercase">ON.KR</h1>
          </Link>

          {pathName !== '/' && (
            <div className="header__search hidden md:block h-[30px] py-1 px-2 text-sm bg-customGrey300 rounded-3xl" role="search">
              <Search />
            </div>
          )}

          <Nav />
        </div>

        {pathName !== '/' && (
          <div className="md:hidden relative z-0 w-full px-2 pb-2 bg-mainColor" role="search">
            <div className="h-[40px] bg-customGrey300 rounded-sm">
              <Search />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
