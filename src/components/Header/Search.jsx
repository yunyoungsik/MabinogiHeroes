'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SearchIcon } from 'lucide-react';

const Search = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/user/${encodeURIComponent(name)}`);
  };

  return (
    <div className="w-full h-full relative">
      <label htmlFor="search" className="hidden">
        검색
      </label>
      <input
        className="w-full h-full py-1 px-2 pr-6 text-white placeholder:text-basicGrey focus:outline-none bg-transparent"
        type="text"
        placeholder="캐릭터명을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button
        className="absolute top-[50%] right-2 translate-y-[-50%] bg-tranparant text-basicGrey"
        type="button"
        onClick={handleSearch}
      >
        <SearchIcon className='w-5 h-5' />
      </button>
    </div>
  );
};

export default Search;
