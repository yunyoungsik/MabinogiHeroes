'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Header = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/characters/${encodeURIComponent(name)}`);
  }

  return (
    <header>
      <label htmlFor="search" className='hidden'>검색</label>
      <input
        type="text"
        placeholder='검색'
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={
          (e) => {
            if(e.key === 'Enter') {
              handleSearch();
            }
          }
        }
      />
      <button type='button' onClick={handleSearch}>검색</button>
    </header>
  )
}

export default Header