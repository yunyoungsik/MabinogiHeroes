'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// components
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import timeAgo from '@/utils/timeAgo';
import { useScrollHandler } from '@/hooks/useScrollAd';
// store
import { usePostStore } from '@/store/usePostStore';
import { useAuthStore } from '@/store/useAuthStore';

const PostView = ({ postId }) => {
  const router = useRouter();
  const { loading, post: data, fetchPost, deletePost } = usePostStore();
  const { authUser } = useAuthStore();

  // const handleProfileClick = () => {
  //   if (post.creator._id === session?.user.id) return router.push('/profile');
  //   router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  // };

  useEffect(() => {
    fetchPost(postId);
  }, [postId, fetchPost]);

  // 삭제
  const handleDelete = async () => {
    const hasConfirmed = confirm('게시물을 정말로 삭제하시겠습니까?');

    if (hasConfirmed) {
      try {
        await deletePost(data._id.toString());
        router.push('/notice');
      } catch (error) {
        console.error('Notice Delete Error', error);
      }
    }
  };

  // 광고
  useScrollHandler('.ad__banner2', 100);

  if (loading || !data || data.length === 0) {
    return (
      <div className="flex items-center justify-center w-full min-h-main bg-mainColor" role="status" aria-live="polite">
        <span className="loader" aria-label="로딩 중"></span>
      </div>
    );
  }

  return (
    <>
      <KakaoAd1 customClass={'max-w-[1280px] w-full h-[100px] my-2 m-auto bg-customGrey900/30'} />

      <div className="max-w-[1280px] w-full p-3 md:p-10 mx-auto bg-white">
        <div className="pb-6 border-b border-solid border-customGrey500/30">
          <h2 className='text-2xl font-bold'>{data?.title}</h2>
          <ul className="list-line flex items-center gap-2 text-sm text-customGrey500">
            <li className='relative'>
              <span>{timeAgo(data.createdAt)}</span>
            </li>
            <li>
              <span>조회수 {data?.view}</span>
            </li>
            <li>
              <div className="creator">
                <span>{data.creator?.username}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="py-6 border-b border-solid border-customGrey500/30">
          <p className='min-h-[474px] overflow-auto whitespace-pre-wrap'>{data?.desc}</p>
        </div>

        <div className="w-full flex items-center justify-end">
          <div className="py-3 md:py-6 flex items-center gap-2">
            {data?.creator.email === authUser?.email && (
              <>
                <Link href={`/notice-update/${data?._id}`} className="py-2 px-4 text-sm text-customGrey500 transition-colors border border-solid border-customGrey500/30 rounded-sm hover:border-customGrey500 hover:bg-customGrey100">
                  수정
                </Link>
                <button type="button" onClick={handleDelete} className="py-2 px-4 text-sm text-customGrey500 transition-colors border border-solid border-customGrey500/30 rounded-sm hover:border-customGrey500 hover:bg-customGrey100">
                  삭제
                </button>
              </>
            )}
            <Link href="/notice" className="py-2 px-4 text-sm text-white transition-colors bg-customGrey900 hover:bg-customGrey800 rounded-sm">
              목록으로
            </Link>
          </div>
        </div>
      </div>

      <KakaoAd2 position={'left'} />
      <KakaoAd3 position={'right'} />
    </>
  );
};

export default PostView;
