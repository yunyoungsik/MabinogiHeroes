import Link from 'next/link';
import React from 'react';
import PageNation from './PageNation';
import Image from 'next/image';
import Category from './Category';

// const getData = async (page) => {
//   const res = await fetch(`http://localhost:3000/api/notice?page=${page}`, {
//     cache: "no-store"
//   })
//   if (!res.ok) {
//     throw new Error("error")
//   }
//   return res.json()
// }

export default async function NoticeList({page}) {
  // const {posts, count} = await getData(page)
  // const postView = 10;
  // console.log(posts, count);

  return (
    <div className="max-w-[980px] m-auto">
      <h2 className="font-bold text-[2rem] pt-[50px] pb-[30px]">공지사항</h2>
      <div className="min-h-[600px] bg-white">
        
        <Category />

        <div className="mt-[30px] mx-[50px]">
          <div className="w-full flex justify-end">
            <div className="bg-[#F3F3F3]">
              <label htmlFor="search" className="hidden">
                검색
              </label>
              <input type="text" name="search" id="search" placeholder="검색어를 입력하세요." className="w-[200px] h-full px-[10px] bg-transparent" />
              <button type="submit" className="w-[44px] h-[44px] ml-[10px]">
                <Image src="/image/svg/search.svg" width={22} height={22} alt="돋보기" className="flex" />
              </button>
            </div>
            <Link href="/write" className="btn-1">
              <span className="btn-inner">글쓰기</span>
            </Link>
          </div>
          <table className="w-full mt-[30px] text-[0.9rem]">
            <colgroup>
              <col className="w-auto" />
              <col className="w-[21%]" />
              <col className="w-[11%]" />
            </colgroup>
            <thead className="h-[56px] border-y border-solid border-black">
              <tr>
                <th className="font-normal">제목</th>
                <th className="font-normal">작성자</th>
                <th className="font-normal">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-solid border-basicGrey/30">
                <td className="h-[56px] group">
                  <Link href="/notice/1" className="flex items-center">
                    <span className="cate-notice">공지</span>
                    <span className="group-hover:underline">제목이 들어갑니다.</span>
                  </Link>
                </td>
                <td className="text-center">
                  <span className="gm">GM</span>
                  운영자
                </td>
                <td className="date text-basicGrey">2024-03-04</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PageNation />
      </div>
    </div>
  );
}