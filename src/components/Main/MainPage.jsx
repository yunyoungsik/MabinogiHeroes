'use client';

import React from 'react';
import Image from 'next/image';
// components
import Search from '../Header/Search';
import HallOfHonor from '../Ranking/HallOfHonor';
import Ranking from '../Ranking/Ranking';
import Notice from '../Notice/Notice';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';

const MainPage = () => {
  useScrollHandler('.ad__banner2', 100);
  return (
    <>
      {/* 헤더 섹션 */}
      <header className="w-full min-h-[50vh] md:min-h-[90vh] flex items-center justify-center bg-mainColor sm:rounded-none md:rounded-b-[5%]">
        <div className="max-w-[1280px] w-full h-full m-auto flex flex-col gap-2">
          <div className="w-full flex flex-col items-center justify-center">
            <Image src="/favicon.svg" width={100} height={100} alt="마비노기영웅전 로고" priority />
            <h1 className="text-[1.5rem] md:text-[3rem] font-bold text-center leading-none">
              마비노기영웅전
              <br />
              캐릭터 검색
            </h1>

            <div
              className="max-w-[700px] w-[85vw] h-[60px] p-4 mt-4 flex items-center justify-center text-white bg-customGrey900 rounded-[60px]"
              role="search"
            >
              <Search />
            </div>

            {/* 광고 */}
            <KakaoAd1
              customClass="max-w-[1080px] w-full h-[100px] mt-4 m-auto bg-customGrey900/30"
              aria-hidden="true"
            />
          </div>
        </div>
      </header>

      {/* 공지사항 섹션 */}
      <section aria-labelledby="notice-heading" className="w-full flex items-center justify-center">
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 id="notice-heading" className="text-[1.5rem] font-bold text-center">
              공지사항
            </h2>
          </div>
          <Notice />
        </div>
      </section>

      {/* 명예의 전당 섹션 */}
      <section
        aria-labelledby="hall-of-honor-heading"
        className="w-full flex items-center justify-center"
      >
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 id="hall-of-honor-heading" className="text-[1.5rem] font-bold text-center">
              명예의 전당
            </h2>
            <p className="px-[24px] md:px-0 text-center">
              명예의 전당 랭킹은 매일 오전 9시 실시간 랭킹 순위를 기준으로 반영됩니다.
            </p>
          </div>
          <HallOfHonor />
        </div>
      </section>

      {/* 실시간 랭킹 섹션 */}
      <section
        aria-labelledby="ranking-heading"
        className="w-full flex items-center justify-center"
      >
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 id="ranking-heading" className="text-[1.5rem] font-bold text-center">
              실시간 랭킹
            </h2>
            <p className="px-[24px] md:px-0 text-center">
              실시간 랭킹 정보는 1시간마다 반영됩니다.
            </p>
          </div>
          <Ranking />
        </div>
      </section>

      {/* 사이드 광고 */}
      <KakaoAd2 position="left" aria-hidden="true" />
      <KakaoAd3 position="right" aria-hidden="true" />
    </>
  );
};

export default MainPage;
