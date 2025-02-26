'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// components
import BasicImage from '../Img/BasicImage';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
import timeAgo from '@/utils/timeAgo';
import memberRank from '@/utils/memberRank';
import { usePostStore } from '@/store/usePostStore';

const NoticeView = ({ postId }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { loading, post: data, fetchPost, deletePost } = usePostStore();

  // const handleProfileClick = () => {
  //   if (post.creator._id === session?.user.id) return router.push('/profile');
  //   router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  // };

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

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

  // 수정
  const handleEdit = () => {
    router.push(`/notice-update/${data?._id}`);
  };

  // 광고
  useScrollHandler('.ad__banner2', 100);

  if (loading || !data || data.length === 0) {
    return (
      <div className="loading h100">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <KakaoAd1 customClass="mY88Wauto" />

      <div className="notice__view">
        <div className="view__top">
          <h2>{data?.title}</h2>
          <ul className="view__info">
            <li>
              <span>{timeAgo(data.createdAt)}</span>
            </li>
            <li>
              <span>조회수 {data?.view}</span>
            </li>
            <li>
              <div className="creator">
                <BasicImage
                  src={`/images/rank/ico_${memberRank(data.creator?.role)}.webp`}
                  width={18}
                  height={18}
                  quality={70}
                  alt="회원등급"
                />
                <span>
                  {data.creator?.username}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="view__content">
          <pre>{data?.desc}</pre>
        </div>

        <div className="view__btn">
          <div className="btn__wrap">
            {data?.creator.id === session?.user.id && (
              <>
                <button type="button" onClick={handleEdit} className="white-btn">
                  수정
                </button>
                <button type="button" onClick={handleDelete} className="white-btn">
                  삭제
                </button>
              </>
            )}
            <Link href="/notice" className="green-btn">
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

export default NoticeView;
