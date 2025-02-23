'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { footerNav, sns } from '@/constants';

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer
      className={`pt-[4rem] text-[0.75rem] text-mainBlack ${
        pathName !== '/' ? 'bg-mainColor' : ''
      }`}
    >
      <div className="max-w-[1280px] px-6 sm:px-6 md:px-0 m-auto flex flex-col gap-1 pt-[2rem] pb-[2rem] text-basicGrey border-t-[1px] border-solid border-basicGrey/25">
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

          <ul className="footer__nav">
            {sns.map((el, key) => (
              <li key={key}>
                <Link href={el.href} target={el.target}>
                  <span dangerouslySetInnerHTML={{ __html: el.src }} />
                  <span>{el.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-basicGrey">
          © All Rights Reserved. ON.KR with NEXON Korea. Data based on NEXON Open API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
