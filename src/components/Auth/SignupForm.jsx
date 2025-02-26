'use client';

import { Eye, EyeOff, IdCard, LockKeyhole, UserRound } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignupForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { loading, error, authUser, signup } = useAuthStore();

  const isValidPassword = (password) => {
    // 숫자와 특수문자 포함, 대소문자 구분 없음
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      setErrorMessage('비밀번호는 8~16자이며, 숫자와 특수문자를 최소 1개 포함해야 합니다.');
      setTimeout(() => setErrorMessage(''), 10000);
      return;
    }

    const user = await signup({ email, password, username });
    if (user) {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[460px] w-full mt-10 flex flex-col gap-1">
      {/* error */}
      {(error || errorMessage) && (
        <p className="py-1 mb-1 text-sm text-white text-center bg-customRed500">
          {error || errorMessage}
        </p>
      )}

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
          autoComplete="email"
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
          minLength={8}
          maxLength={16}
          placeholder="비밀번호(8~16자, 숫자와 특수문자를 최소 1개 포함)"
          autoComplete="new-password"
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

      {/* username */}
      <fieldset className="relative w-full">
        <legend className="sr-only">닉네임</legend>
        <label htmlFor="username" className="absolute top-1/2 -translate-y-1/2 left-3">
          <IdCard stroke="#b0b8c1" size={24} />
        </label>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="닉네임"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full py-[16px] px-[12px] pl-10 transition-colors bg-white border border-solid border-customGrey500/30 rounded-sm focus:outline-none focus:border-customBlue500 focus:border-2 focus:py-[15px] focus:px-[11px] focus:pl-10"
          />
        </div>
      </fieldset>

      {/* button */}
      <button
        type="submit"
        className="w-full p-4 mt-4 flex justify-center text-sm font-medium text-white transition-colors bg-customGrey900 border border-transparent rounded-sm shadow-sm hover:bg-customBlue500 disabled:cursor-not-allowed disabled:bg-customGrey500/50"
        disabled={loading}
      >
        {loading ? <span className="loader !w-[14px] !h-[14px] !border-2" /> : '회원가입'}
      </button>
    </form>
  );
};

export default SignupForm;
