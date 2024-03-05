import CommentList from '@/components/Comment/CommentList';
import Link from 'next/link';
import React from 'react';

// const getData = async (postNum) => {
//   const res = await fetch(`http://localhost:3000/api/post/${postNum}`, {
//     cache: "no-store"
//   })

//   if(!res.ok) {
//     throw new Error("Error : getData")
//   }

//   return res.json()
// }

export default async function page({ params }) {
  // const {postNum} = params;
  // console.log(postNum);
  // const data = await getData(postNum);
  // console.log(data);

  // if (!data || data.length === 0) {
  //   return (
  //     <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
  //       <span className="loader"></span>
  //     </div>
  //   );
  // }

  return (
    <main className="w-full min-h-main">
      <div className="max-w-[980px] m-auto">
        <h2 className="font-bold text-[2rem] pt-[50px] pb-[30px]">공지사항</h2>
        <div className="min-h-[600px] pt-[50px] px-[50px] pb-[60px] bg-white">
          <div className="pb-[20px] border-b border-solid border-basicBlack">
            <h3 className="font-bold text-[1.5rem]">타이틀이 들어갑니다.</h3>
            <ul className="flex info-line mt-[0.7rem]">
              <li>
                <span className="gm">GM</span>운영자
              </li>
              <li className="date">2024-03-05</li>
            </ul>
          </div>
          <div className="pt-[60px] pb-[50px] break-all border-b border-solid border-basicGrey/60">
            <p>내용이 들어갑니다.</p>
          </div>

          <div></div>
          <div className="w-full mt-[20px] flex justify-end">
            <Link href="/notice" className="btn-1">
              <span className="btn-inner">목록</span>
            </Link>
          </div>
        </div>
        <CommentList />
      </div>
    </main>
  );
}
