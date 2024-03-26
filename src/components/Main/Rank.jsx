import Link from 'next/link';
import React from 'react';

const Rank = () => {
  return (
    <section className="sm:w-[100%] md:w-[49.25%] h-full border border-solid border-basicGrey/30 rounded-sm bg-white">
      <div className='flex items-center justify-between px-3 py-2  text-[0.9rem]'>
        <h2 className='font-bold'>랭킹</h2>
        <Link className='text-basicGrey' href='/'>&gt;</Link>
      </div>
      <ul className=" text-[0.9rem] leading-4 grid-main border-t border-solid border-basicGrey/30">
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 bg-basicGrey/10 flex items-center justify-center'><p>순위</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 bg-basicGrey/10 flex items-center justify-start text-left'><p>닉네임</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 bg-basicGrey/10 flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 bg-basicGrey/10 flex items-center justify-center'><p>길드</p></li>
        {/* rank */}
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center m-auto rounded-md bg-rankGold'>1</div></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-start'><Link href={`/`} className='hover:underline line-1'>캐릭터명</Link></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>길드</p></li>

        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center m-auto rounded-md bg-rankSilver'>2</div></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>길드</p></li>
 
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><div className='w-[20px] h-[20px] text-white text-center m-auto rounded-md bg-rankBronze'>3</div></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>길드</p></li>
        
        {/* 4위~ */}
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><div className='w-[20px] h-[20px] text-black text-center m-auto'>4</div></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] border-b border-solid border-basicGrey/30 flex items-center justify-center'><p>길드</p></li>

        <li className='h-[2rem] flex items-center justify-center'><div className='w-[20px] h-[20px] text-black text-center m-auto'>5</div></li>
        <li className='h-[2rem] flex items-center justify-start'><Link href={`/`} className='hover:underline'>캐릭터명</Link></li>
        <li className='h-[2rem] flex items-center justify-center'><p>캐릭터</p></li>
        <li className='h-[2rem] flex items-center justify-center'><p>길드</p></li>
      </ul>
    </section>
  );
};

export default Rank;
