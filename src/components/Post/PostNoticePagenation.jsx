'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const PostNoticePagenation = ({ page, count, postView }) => {
  const router = useRouter();
  const totalPage = Math.ceil(count / postView);

  const changePage = (newPage) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <nav className="py-3 md:py-4 flex items-center justify-center">
      <ul>
        {page > 1 && <li onClick={() => changePage(page - 1)}>&lt;</li>}
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
          <li key={pageNum} className={`py-1 px-2 transition-colors border border-solid border-customGrey500/30 rounded-sm cursor-pointer ${pageNum === page ? ' text-white bg-customGrey900' : ''}`} onClick={() => changePage(pageNum)}>
            {pageNum}
          </li>
        ))}
        {page < totalPage && <li onClick={() => changePage(page + 1)} className='py-1 px-2 border border-solid border-customGrey500/30 rounded-sm cursor-pointer'>&gt;</li>}
      </ul>
    </nav>
  );
};

export default PostNoticePagenation;
