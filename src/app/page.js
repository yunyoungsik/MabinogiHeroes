import Notice from '@/components/Board/Notice'
import Update from '@/components/Board/Update'
import Rank from '@/components/Rank/Rank'
import MainSlider from '@/components/Slider/MainSlider'
import React from 'react'

export default function page() {
  return (
    <main className='w-full min-h-main'>
      <div className="max-w-[1280px] h-full m-auto">
        <MainSlider />
        <div className='w-full h-full mt-4 sm:block md:flex items-center justify-between'>
          <Rank />
          <Notice />
          <Update />
        </div>
      </div>
    </main>
  )
}