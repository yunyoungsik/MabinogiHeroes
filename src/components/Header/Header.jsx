import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[66px] px-6 border-b-2 border-solid border-b-basicGrey/30 bg-white uppercase">
      <Link href="/">
        <h1 className='font-bold'>
          LOGO
        </h1>
      </Link>
      <Nav />
      <Search />
      <Link href="/login">
        <p className='font-bold'>로그인</p>
      </Link>
    </header>
  );
};

export default Header;
