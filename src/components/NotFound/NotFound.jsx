import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center text-cente">
      <h2 className='text-[2rem] font-bold'>MHON.KR</h2>
      <p className='text-[1.125rem] text-customGrey500'>페이지를 찾을 수 없습니다.</p>
      <Link href={'/'} className='py-[8px] px-[16px] mt-[16px] text-[0.75rem] font-bold text-white bg-customGrey900 hover:bg-customGrey800'>메인으로</Link>
    </div>

    
    //   > p {
    //     font-size: 1.125rem;
    //     color: var(--white);
    //   }
    
    //   > a {
    //     display: flex;
    //     align-items: center;
    //     padding: 8px 16px;
    //     margin-top: 16px;
    //     font-size: 0.75rem;
    //     font-weight: bold;
    //     text-align: center;
    //     color: var(--white);
    //     background-color: var(--green400);
    
    //     &:hover {
    //       background-color: var(--green600);
    //     }
    //   }
    // }
    
  );
};

export default NotFound;
