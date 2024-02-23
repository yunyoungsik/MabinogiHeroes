'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/characters/${encodeURIComponent(name)}`);
  };

  return (
    <div className="relative">
      <label htmlFor="search" className="hidden">
        검색
      </label>
      <input
        className="py-1 px-2 border-2 border-basicGrey/20 rounded-xl focus:outline-none"
        type="text"
        placeholder="검색"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button
        className="absolute top-[50%] right-2 translate-y-[-50%] bg-white text-basicGrey"
        type="button"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-6 h-6 m-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
