import Link from 'next/link';
import React from 'react';

const Notice = () => {
  return (
    <section className="sm:w-[100%] md:w-[49.25%] h-full">
      <h2 className="font-bold text-[1.5rem]">공지사항</h2>
      <ul className="bg-white px-5 py-4 border-2 border-solid border-basicGrey/30">
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-event">이벤트</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-shop">샵</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-check">점검</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-nexon">넥슨</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-nexon">넥슨</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Notice;
