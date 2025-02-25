'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

const Search = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/user/${encodeURIComponent(name)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full h-full relative">
      <label htmlFor="search" className="sr-only">
        캐릭터명 검색
      </label>
      <input
        id="search"
        className="w-full h-full py-1 px-2 pr-6 focus:outline-none bg-transparent"
        type="text"
        placeholder="캐릭터명을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="absolute top-[50%] right-2 translate-y-[-50%] bg-transparent text-customGrey500"
        type="submit"
        aria-label="검색"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
};

export default Search;
