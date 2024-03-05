'use client';

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session, status } = useSession();

  return (
    <ul className="text-[0.9rem] flex">
      {status === 'authenticated' ? (
        <>
          <li className='flex items-center justify-center'>
            <p><span className='font-bold'>{session?.user.name}</span>님 반갑습니다.</p>
          </li>
          <li className='ml-[10px] py-[10px] px-[20px] rounded-md hover:bg-basicGrey/20'>
            <span onClick={signOut} className="font-bold cursor-pointer">
              로그아웃
            </span>
          </li>
        </>
      ) : (
        <>
          <li className='py-[10px] px-[20px] rounded-md hover:bg-basicGrey/20'>
            <Link href="/login">
              <p className="font-bold">로그인</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Login;
