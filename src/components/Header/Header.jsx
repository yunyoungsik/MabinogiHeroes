import React from 'react'
import Nav from './Nav'
import Search from './Search'

const Header = () => {

  return (
    <header className='flex items-center justify-between w-full h-[66px] px-2'>
      <h1>
        Logo
      </h1>
      <Nav />
      <Search />
    </header>
  )
}

export default Header