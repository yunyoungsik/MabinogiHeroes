'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoticeWrite = () => {
  const [cate, setCate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const modules = {
    toolbar: {
      container: [[{ header: [1, 2, 3, 4, 5, 6, false] }],[{ font: [] }], [{ align: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ list: 'ordered' }, { list: 'bullet' }, 'link'], [{ color: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { background: [] }], ['image', 'video'], ['clean']],
    },
  };

  const handleSubmit = async () => {
    const res = await fetch("/pages/api/write", {
      method: "POST",
      body: JSON.stringify({
        cate: cate,
        title: title,
        content: content,
      })
    })
  }
  
  

  return (
    <div className="w-full h-full mt-[66px]">
      <div className="max-w-[1280px] m-auto">
        <h2 className='font-bold text-[2rem] mb-4'>공지사항</h2>
        <form className='pt-6 px-8 bg-white'>
          <fieldset className="border-0">
            <legend className="hidden">글쓰기</legend>
            <div>
              <label htmlFor="cate" className="block mb-2 text-basicRed">
                분류 선택
              </label>
              <select
                className='py-2 px-4 text-basicGrey bg-basicGrey/20'
                onChange={(e) => setCate(e.target.value)}
              >
                <option className="notice">공지</option>
                <option className="event">이벤트</option>
              </select>
            </div>
            <div className='mt-4'>
              <label className='hidden' htmlFor="title">제목</label>
              <input className='w-full text-[2rem] py-4 px-6 border-t border-solid border-black focus:border-1' type="text" name="title" id="title" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} />
            </div>
            <ReactQuill
                theme='snow'
                modules={modules}
                value={content}
                onChange={setContent}
                placeholder='내용'
              />
            <div className=''>
              <Link href="/notice" className='btn-2'><span className='btn-inner'>취소</span></Link>
              <button className='btn-1' type='button' onClick={handleSubmit}><span className='btn-inner'>등록</span></button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NoticeWrite;
