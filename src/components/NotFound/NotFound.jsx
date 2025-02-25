import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold" aria-label="MHON.KR 로고">
        MHON.KR
      </h2>

      <p className="text-lg text-customGrey500 mt-4">페이지를 찾을 수 없습니다.</p>

      <Link
        href="/"
        className="py-2 px-4 mt-6 text-sm font-bold text-white bg-customGrey900 hover:bg-customGrey800 rounded"
      >
        메인으로
      </Link>
    </div>
  );
};

export default NotFound;
