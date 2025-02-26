'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import { usePostStore } from '@/store/usePostStore';

const NoticeWrite = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { loading, writePost } = usePostStore();

  useEffect(() => {
    if (!session || session?.user.role !== 'admin') {
      alert('운영자만 공지사항을 작성할 수 있습니다.');
      router.push('notice');
    }
  }, [session]);

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: '', desc: '' });

  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await writePost({
        userId: session?.user.id,
        username: session?.user.username,
        role: session?.user.role,
        title: post.title,
        desc: post.desc,
      });
      if (res.status === 200) {
        router.push('/notice');
      }
    } catch (error) {
      console.error('Notice Write Error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || !session) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Form
      type="작성"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default NoticeWrite;
