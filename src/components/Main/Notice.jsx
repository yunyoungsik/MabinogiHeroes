import Link from 'next/link';
import React from 'react';

const Notice = () => {
  return (
    <section className="sm:w-[100%] md:w-[49.25%] border border-solid border-basicGrey/30 rounded-md h-full bg-white">
      <h2 className="px-3 py-2 font-bold text-[0.9rem]">공지사항</h2>
      <ul className="text-[0.9rem] border-t border-solid border-basicGrey/30">
        <li className="w-full h-[2rem] px-3 border-b border-solid border-basicGrey/30 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] px-3 border-b border-solid border-basicGrey/30 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] px-3 border-b border-solid border-basicGrey/30 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] px-3 border-b border-solid border-basicGrey/30 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] px-3 border-b border-solid border-basicGrey/30 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
          </div>
          <Link href={`/`} className="inline-block hover:underline line-1">
            2/29(목) 오전8시 정식 서버 점검 안내
          </Link>
        </li>
        <li className="w-full h-[2rem] px-3 flex items-center justify-start">
          <div className="flex items-center justify-center">
            <div className="cate-notice">공지</div>
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
