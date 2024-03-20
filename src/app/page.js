import Search from '@/components/Header/Search'
import Notice from '@/components/Main/Notice'
import Rank from '@/components/Main/Rank'
import MainSlider from '@/components/Slider/MainSlider'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full min-h-main'>
      <div className="max-w-[1280px] h-full m-auto">
        <MainSlider />
        {/* <div className='w-full h-full mt-4 sm:block md:flex items-start justify-between'>
          <Rank />
          <Notice />
        </div> */}
      </div>
    </main>
  )
}