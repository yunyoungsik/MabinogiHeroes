'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// components
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// store
import { useAuthStore } from '@/store/useAuthStore';

const AuthPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const { authUser } = useAuthStore();
  if (authUser) return router.push('/');

  return (
    <section className="w-full h-full">
      <div className="max-w-[460px] mx-auto py-[8px] px-[12px] flex flex-col items-center justify-center">
        <div className="w-full pb-5 border-b border-solid border-customGrey500/30">
          <h2 className="mt-20 text-4xl text-center font-bold">MHON.KR</h2>
          <p className="mt-1 text-sm text-center">MHON.KR에 오신것을 환영합니다.</p>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm text-customGrey500">
            {isLogin ? '처음이신가요?' : '이미 계정이 있나요?'}
          </p>

          <button
            onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
            className="text-sm font-bold text-customGrey700 hover:underline"
          >
            {isLogin ? '회원가입' : '로그인'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
