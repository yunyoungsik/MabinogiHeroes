'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SearchIcon } from 'lucide-react';
// components
import PostNoticePagenation from './PostNoticePagenation';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
import timeAgo from '@/utils/timeAgo';
// store
import { usePostStore } from '@/store/usePostStore';
import { useAuthStore } from '@/store/useAuthStore';

const PostNoticeList = ({ data, handleUserClick }) => {
  return (
    <div className="w-full min-h-[474px]">
      <table className="w-full h-full">
        <colgroup>
          <col width="10%" />
          <col />
          <col width="21%" />
          <col width="10%" />
        </colgroup>
        <thead className="text-sm border-y border-solid border-customGrey500">
          <tr>
            <th className="py-2 font-normal">번호</th>
            <th className="py-2 font-normal">제목</th>
            <th className="py-2 font-normal">작성일</th>
            <th className="py-2 font-normal">조회수</th>
          </tr>
        </thead>

        <tbody className="w-full">
          {data?.map((post) => (
            <tr
              key={post._id}
              className="text-xs text-center border-b border-solid border-b-gray-500/30"
            >
              <td className="number">{post.noticeNum}</td>
              <td className="py-3 text-sm text-left">
                <Link href={`/notice/${post._id}`} className="hover:underline">
                  <h3 className="line-clamp-1">
                    <span>{post.title}</span>
                  </h3>
                </Link>
              </td>
              <td className="text-customGrey500">{timeAgo(post.createdAt)}</td>
              <td className="text-customGrey500">{post.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PostNotice = ({ page }) => {
  // 검색
  const [searchText, setSearchText] = useState('');
  const [searchTimout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const { loading, allPosts, count, fetchPosts } = usePostStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const filterNotice = (searchtext) => {
    const regex = new RegExp(searchtext, 'i');
    return allPosts.filter(
      (item) =>
        regex.test(item.creator?.username) || regex.test(item.title) || regex.test(item.desc)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterNotice(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleUserClick = (user) => {
    setSearchText(user);

    const searchResult = filterNotice(user);
    setSearchedResults(searchResult);
  };

  // 페이지
  const postView = 10;

  // 광고
  useScrollHandler('.ad__banner2', 100);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-main bg-mainColor"
        role="status"
        aria-live="polite"
      >
        <span className="loader" aria-label="로딩 중"></span>
      </div>
    );
  }

  return (
    <>
      <section className="w-full h-full">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
          {/* 광고 */}
          <KakaoAd1
            customClass={'max-w-[1280px] w-full h-[100px] mt-2 m-auto bg-customGrey900/30'}
          />

          <div className="w-full h-full p-6 pb-3 border border-solid border-customGrey500/30 rounded-sm bg-white">
            <div className="w-full mb-5 flex items-center justify-between">
              <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">공지사항</h2>
              <div className="flex items-center gap-2">
                <form htmlFor="notice__search" className="relative">
                  <label htmlFor="notice__search" className="sr-only">
                    공지사항 검색
                  </label>
                  <input
                    type="text"
                    placeholder="검색"
                    name="notice__search"
                    id="notice__search"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="min-w-[250px] h-[40px] pl-[12px] pr-[32px] bg-customGrey200 rounded-md"
                  />
                  <button
                    type="submit"
                    aria-label="검색"
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    <SearchIcon className="stroke-customGrey500 size-4" />
                  </button>
                </form>
                {authUser?.role === 'admin' && (
                  <Link
                    href="/notice-write"
                    className="py-2 px-4 text-sm font-bold text-white transition-colors bg-customGrey900 hover:bg-customGrey800 rounded"
                  >
                    <span>글쓰기</span>
                  </Link>
                )}
              </div>
            </div>

            {searchText ? (
              <PostNoticeList data={searchedResults} handleUserClick={handleUserClick} />
            ) : (
              <PostNoticeList data={allPosts} handleUserClick={handleUserClick} />
            )}
            <PostNoticePagenation page={page} count={count} postView={postView} />
          </div>
        </div>
      </section>

      <KakaoAd2 position={'left'} />
      <KakaoAd3 position={'right'} />
    </>
  );
};

export default PostNotice;
