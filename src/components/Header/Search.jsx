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
    <div>
      <label htmlFor="search" className="hidden">
        검색
      </label>
      <input
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
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default Search;
