'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { footerNav, sns } from '@/constants';

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer
      className={`pt-[4rem] text-[0.75rem] ${
        pathName !== '/' ? 'bg-mainColor' : ''
      }`}
    >
      <div className="max-w-[1280px] px-6 sm:px-6 md:px-0 m-auto flex flex-col gap-1 pt-[2rem] pb-[2rem] text-customGrey500 border-t-[1px] border-solid border-customGrey500/25">
        <div className="footer__navBox">
          <ul className="footer__nav">
            {footerNav.map((el, key) => (
              <li key={key}>
                <Link href={el.href} target={el.target}>
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="footer__nav sns">
            {sns.map((el, key) => (
              <li key={key}>
                <Link href={el.href} target={el.target}>
                  <span dangerouslySetInnerHTML={{ __html: el.src }} className='back backdrop-saturate-100' />
                  <span>{el.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-customGrey500">
          © All Rights Reserved. ON.KR with NEXON Korea. Data based on NEXON Open API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
