'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [cate, setCate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/write', {
      method: 'POST',
      body: JSON.stringify({
        cate: cate,
        title: title,
        content: content,
      }),
    });
  };

  return (
    <main className="'w-full min-h-main">
      <div className="w-full h-full mt-[66px]">
        <div className="max-w-[980px] m-auto">
          <h2 className="font-bold text-[2rem] pt-[50px] pb-[30px]">공지사항</h2>
          <form className="pt-6 px-8 bg-white">
            <fieldset className="border-0">
              <legend className="hidden">글쓰기</legend>
              <div>
                <label htmlFor="cate" className="block mb-2 text-[#AC6463]">
                  분류 선택
                </label>
                <select className="py-2 px-4 text-basicGrey bg-basicGrey/20" onChange={(e) => setCate(e.target.value)}>
                  <option className="notice">공지</option>
                  <option className="event">이벤트</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="hidden" htmlFor="title">
                  제목
                </label>
                <input className="w-full text-[2rem] py-4 px-6 border-t border-solid border-black focus:border-1" type="text" name="title" id="title" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div>
                <label htmlFor="content" className="hidden">
                  내용
                </label>
                <textarea className="w-full min-h-[50vh] py-4 px-6 focus:outline-none bg-[#f3f3f3] border-y border-solid border-[#c2c2c2] resize-none" name="content" id="content" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
              </div>

              <div className="w-full mt-5 mb-10 flex items-center justify-end">
                <Link href="/notice" className="btn-2">
                  <span className="btn-inner">취소</span>
                </Link>
                <button className="btn-1 ml-2" type="button" onClick={handleSubmit}>
                  <span className="btn-inner">등록</span>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
