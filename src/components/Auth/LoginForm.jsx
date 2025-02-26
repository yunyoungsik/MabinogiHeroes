'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, LockKeyhole, UserRound } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { loading, error, login } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login({ email, password });
    if (user) {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-[460px] w-full mt-10 flex flex-col gap-1">
      {/* error */}
      {error && <p className="py-1 mb-1 text-sm text-white text-center bg-customRed500">{error}</p>}

      {/* email */}
      <fieldset className="relative w-full">
        <legend className="sr-only">이메일</legend>
        <label htmlFor="email" className="absolute top-1/2 -translate-y-1/2 left-3">
          <UserRound stroke="#b0b8c1" size={24} />
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일 주소"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-[16px] px-[12px] pl-10 transition-colors bg-white border border-solid border-customGrey500/30 rounded-sm focus:outline-none focus:border-customBlue500 focus:border-2 focus:py-[15px] focus:px-[11px] focus:pl-10"
        />
      </fieldset>

      {/* password */}
      <fieldset className="relative w-full">
        <legend className="sr-only">비밀번호</legend>
        <label htmlFor="password" className="absolute top-1/2 -translate-y-1/2 left-3">
          <LockKeyhole stroke="#b0b8c1" size={24} />
        </label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
          minLength={6}
          maxLength={16}
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full py-[16px] px-[12px] pl-10 transition-colors bg-white border border-solid border-customGrey500/30 rounded-sm focus:outline-none focus:border-customBlue500 focus:border-2 focus:py-[15px] focus:px-[11px] focus:pl-10"
        />
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-3"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Eye stroke="#b0b8c1" size={16} />
          ) : (
            <EyeOff stroke="#b0b8c1" size={16} />
          )}
        </button>
      </fieldset>

      <button
        type="submit"
        disabled={loading}
        className="w-full p-4 mt-4 flex justify-center text-sm font-medium text-white transition-colors bg-customGrey900 border border-transparent rounded-sm shadow-sm hover:bg-customBlue500 disabled:cursor-not-allowed disabled:bg-customGrey500/50"
      >
        {loading ? <span className="loader !w-[14px] !h-[14px] !border-2" /> : '로그인'}
      </button>
    </form>
  );
};

export default LoginForm;
