'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Search = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/characters/${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-full h-full relative">
      <label htmlFor="search" className="hidden">
        검색
      </label>
      <input
        className="w-full h-full py-1 px-2 text-white focus:outline-none bg-transparent"
        type="text"
        placeholder="캐릭명을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button className="absolute top-[50%] right-2 translate-y-[-50%] bg-tranparant text-basicGrey" type="button" onClick={handleSearch}>
        <Image src="/image/svg/search.svg" width={20} height={20} alt="돋보기" />
      </button>
    </div>
  );
};

export default Search;
