'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// components
import Form from './Form';
// store
import { useAuthStore } from '@/store/useAuthStore';
import { usePostStore } from '@/store/usePostStore';

const PostWrite = () => {
  const router = useRouter();
  const [post, setPost] = useState({ title: '', desc: '' });
  const [submitting, setIsSubmitting] = useState(false);
  const { writePost } = usePostStore();
  const { authUser } =useAuthStore();

  if(authUser?.role !== 'admin') return router.push('/');

  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await writePost({
        email: authUser?.email,
        username: authUser?.username,
        role: authUser?.role,
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

export default PostWrite;
