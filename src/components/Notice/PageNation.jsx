"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Pagenaion({ page, count, postView }) {
  const router = useRouter();
  const totalPage = Math.ceil(count / postView);

  const changePage = (newPage) => {
    router.push(`?page=${newPage}`);
  }

  return (
    <div className='m_list__pagenation container'>
      <ul>
        {page > 1 && <li onClick={() => changePage(page - 1)}>&lt;</li>}
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
          <li
            key={pageNum}
            className={pageNum === page ? 'active' : ''}
            onClick={() => changePage(pageNum)}
          >
            {pageNum}
          </li>
        ))}
        {page < totalPage && <li onClick={() => changePage(page + 1)}>&gt;</li>}
      </ul>
    </div>
  )
}
