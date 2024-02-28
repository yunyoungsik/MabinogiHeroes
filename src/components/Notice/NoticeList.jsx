import Link from 'next/link'
import React from 'react'

const NoticeList = () => {
  return (
    <div className='max-w-[1280px] h-[full] m-auto'>
      <Link href="/write" className='btn-1'><span className='btn-inner'>글쓰기</span></Link>
    </div>
  )
}

export default NoticeList