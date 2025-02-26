import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div className="max-w-[800px] w-full h-full mx-auto bg-white">
      <form onSubmit={handleSubmit} className='w-full h-full flex flex-col text-lg'>
        <label htmlFor="post__title" className='p-6 border- border-b border-customGrey500/30'>
          <span className="sr-only">제목</span>
          <input
            id="post__title"
            name="post__title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="제목"
            required
            className='w-full p-6 bg-customGrey100'
          />
        </label>

        <label htmlFor="post__desc" className="p-6 border- border-b border-customGrey500/30">
          <span className="sr-only">글을 작성해주세요.</span>
          <textarea
            id="post__desc"
            name="post__desc"
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
            placeholder="내용"
            required
            className='w-full min-h-[460px] p-6 bg-customGrey100 resize-none'
          />
        </label>

        <div className="p-6 flex items-center justify-end">
          <div className="flex items-center gap-2 text-sm text-customGrey500">
            <Link href="/notice" className="px-2 py-1 transition-colors border border-solid border-customGrey500/30 rounded-sm hover:border-customGrey500 hover:bg-customGrey100">
              취소
            </Link>
            <button type="submit" disabled={submitting} className="px-2 py-1 transition-colors border border-solid border-customGrey500/30 rounded-sm hover:border-customGrey500 hover:bg-customGrey100">
              {submitting ? `${type}중` : type}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
