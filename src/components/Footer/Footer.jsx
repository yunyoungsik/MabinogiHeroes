'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { footerNav, sns } from '@/constants';

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className={`pt-[4rem] text-[0.75rem] ${pathName !== '/' ? 'bg-mainColor' : ''}`}>
      <div className="max-w-[1280px] px-6 sm:px-6 md:px-0 m-auto flex flex-col gap-1 pt-[2rem] pb-[2rem] text-customGrey500 border-t-[1px] border-solid border-customGrey500/25">
        {/* Footer Navigation */}
        <nav className="footer__navBox" aria-label="푸터 내비게이션">
          <ul className="footer__nav">
            {footerNav.map((el) => (
              <li key={el.name}>
                <Link
                  href={el.href}
                  target={el.target}
                  rel={el.target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <ul className="footer__nav sns">
            {sns.map((el) => (
              <li key={el.name}>
                <Link
                  href={el.href}
                  target={el.target}
                  rel={el.target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: el.src }}
                    className="back backdrop-saturate-100"
                    aria-hidden="true"
                  />
                  <span>{el.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright Information */}
        <address className="not-italic">
          <p className="text-customGrey500">
            © All Rights Reserved. ON.KR with NEXON Korea. Data based on NEXON Open API.
          </p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
