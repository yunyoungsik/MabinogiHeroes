import Link from 'next/link';
import React from 'react';

const Rank = () => {
  return (
    <section className="sm:w-[100%] md:w-[49.25%] h-full">
      <h2 className="font-bold text-[1.5rem]">랭킹</h2>
      <ul className="bg-white px-5 py-4 border-2 border-solid border-basicGrey/30 grid-main">
        <li className='h-[2rem] flex items-center justify-center'><p>랭킹</p></li>
        <li className='h-[2rem] flex items-center justify-start text-left'><p>닉네임</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>
        {/* rank */}
        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center font-[1rem] leading-4 m-auto rounded-md bg-rankGold'>1</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline line-1'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>

        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center font-[1rem] leading-4 m-auto rounded-md bg-rankSilver'>2</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>

        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center font-[1rem] leading-4 m-auto rounded-md bg-rankBronze'>3</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>
        
        {/* 4위~ */}
        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-black text-center font-[1rem] leading-4 m-auto'>4</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>

        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-black text-center font-[1rem] leading-4 m-auto'>5</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>
      </ul>
    </section>
  );
};

export default Rank;
