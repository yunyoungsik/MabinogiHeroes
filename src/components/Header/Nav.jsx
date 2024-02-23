import React from 'react';
import { nav } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="flex text-basicBlack font-bold">
        {nav.map((el, index) => (
          <li className="mr-2" key={index}>
            <Link href={el.href}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
