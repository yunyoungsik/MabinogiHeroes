import Link from 'next/link';
import React from 'react';
import PageNation from './PageNation';

const getData = async (page, cate) => {
  const res = await fetch(`http://localhost:3000/`);
  if (!res.ok) {
    throw new Error('error');
  }
  return res.json();
};

const NoticeList = () => {
  // const {posts, count} = getData(page, cate)
  // const postView = 10;
  // console.log(posts);

  return (
    <div className="max-w-[980px] min-h-[600px] m-auto">
      <h2 className="font-bold text-[2rem] pt-[50px] pb-[30px]">공지사항</h2>
      <div className="bg-white">
        <ul className="flex">
          <li className="on flex flex-1 w-full h-full font-bold text-basicGrey bg-black">
            <span className="block w-full">
              <Link href="/notice" className="flex w-full h-[50px] items-center justify-center">
                전체
              </Link>
            </span>
          </li>
          {/* 테스트 */}
          <li className="flex flex-1 w-full h-full font-bold text-basicGrey bg-black hover:text-white">
            <span className="block w-full">
              <Link href="/notice" className="flex w-full h-[50px] items-center justify-center">
                전체
              </Link>
            </span>
          </li>
        </ul>

        <div className="mt-[30px] mx-[50px]">
          <div className="w-full flex justify-end">
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
                  <Link href="" className="flex items-center">
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

              <tr className="border-b border-solid border-basicGrey/30">
                <td className="h-[56px] group">
                  <Link href="" className="flex items-center">
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
              <tr className="border-b border-solid border-basicGrey/30">
                <td className="h-[56px] group">
                  <Link href="" className="flex items-center">
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
              <tr className="border-b border-solid border-basicGrey/30">
                <td className="h-[56px] group">
                  <Link href="" className="flex items-center">
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
              <tr className="border-b border-solid border-basicGrey/30">
                <td className="h-[56px] group">
                  <Link href="" className="flex items-center">
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
        {/* <PageNation /> */}
      </div>
    </div>
  );
};

export default NoticeList;
