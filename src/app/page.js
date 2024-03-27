import Search from '@/components/Header/Search';
import Rank from '@/components/Main/Rank';
import MainSlider from '@/components/Slider/MainSlider';
import React from 'react';

export default function Home() {
  return (
    <main className="w-full min-h-main">
      <div className="max-w-[1280px] h-full m-auto">
        <MainSlider />
        <div className="max-w-[800px] h-[60px] mt-[12px] mx-auto border-2 border-borderColor rounded-xl bg-[#303134]">
          <Search />
        </div>
        {/* <div className='w-full h-full mt-4 sm:block md:flex items-start justify-between'>
          <Rank />
        </div> */}
      </div>
    </main>
  );
}
