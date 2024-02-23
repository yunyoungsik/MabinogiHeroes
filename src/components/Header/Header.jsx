import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-[66px] px-2 border-b-2 border-solid border-b-basicGrey/20 bg-white">
      <Link href="/">
        <h1>LOGO</h1>
      </Link>
      <Nav />
      <Search />
    </header>
  );
};

export default Header;
