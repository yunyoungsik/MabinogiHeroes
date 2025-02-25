'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
// components
import HallOfHonorItem from './HallOfHonorItem';
import RankingItem from './RankingItem';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';

const RankingPage = () => {
  const [rankType, setRankType] = useState(0); // 0: 명예의 전당, 1: 실시간 랭킹
  const [type, setType] = useState(0); // 0: 공격력, 1: 마법공격력
  const [localPage, setLocalPage] = useState(1);

  const maxPage = rankType === 0 ? (type === 0 ? 20 : 10) : type === 0 ? 400 : 200;
  // const maxPage = rankType === 0 ? (type === 0 ? 20 : 10) : type === 0 ? 50 : 50;

  const handleNextPage = () => {
    if (localPage < maxPage) setLocalPage(localPage + 1);
  };

  const handlePrevPage = () => {
    if (localPage > 1) setLocalPage(localPage - 1);
  };

  useScrollHandler('.ad__banner2', 100);

  return (
    <>
      {/* 랭킹 정보 섹션 */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-2 px-3">
          <h2 className="text-customGrey600 font-bold">랭킹</h2>
          <ul className="text-[0.75rem] text-customGrey500">
            <li>
              명예의 전당 - 매일 오전 9시 기준 업데이트 (공격력 최대 200위, 마법공격력 최대 100위)
            </li>
            <li>
              실시간 랭킹 - 1시간마다 업데이트 (공격력 최대 4,000위, 마법공격력 최대 2,000위)
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full h-full">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
          {/* 광고 섹션 */}
          <KakaoAd1
            customClass={'max-w-[1280px] w-full h-[100px] mt-2 m-auto bg-customGrey900/30'}
          />

          {/* 랭킹 필터 */}
          <nav
            aria-label="랭킹 필터"
            className="p-4 flex flex-row items-center gap-4 bg-white border border-customGrey500/30 rounded-sm"
          >
            {/* 랭킹 유형 선택 */}
            <fieldset className="flex items-center gap-4 text-sm">
              <legend className="sr-only">랭킹 종류 선택</legend>
              <span className="text-customGrey500">종류</span>
              {['명예의전당', '실시간랭킹'].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={rankType === index}
                  onClick={() => {
                    setRankType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-customGrey500 ${
                    rankType === index ? 'text-white bg-customGrey900' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </fieldset>

            {/* 기준 선택 */}
            <fieldset className="flex items-center gap-4 text-sm">
              <legend className="sr-only">랭킹 기준 선택</legend>
              <span className="text-customGrey500">기준</span>
              {['공격력', '마법공격력'].map((label, index) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={type === index}
                  onClick={() => {
                    setType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-customGrey500 ${
                    type === index ? 'text-white bg-customGrey900' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </fieldset>
          </nav>

          {/* 랭킹 데이터 렌더링 */}
          {rankType === 0 ? (
            <HallOfHonorItem type={type} localPage={localPage} />
          ) : (
            <RankingItem type={type} localPage={localPage} />
          )}

          {/* 페이지네이션 */}
          <nav aria-label="페이지네이션" className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={localPage === 1}
              aria-disabled={localPage === 1}
              aria-label="이전 페이지"
              className="w-12 h-12 flex items-center justify-center bg-white hover:bg-customGrey100 border border-customGrey500/30 transition-colors disabled:opacity-30"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={localPage >= maxPage}
              aria-disabled={localPage >= maxPage}
              aria-label="다음 페이지"
              className="w-12 h-12 flex items-center justify-center bg-white hover:bg-customGrey100 border border-customGrey500/30 transition-colors disabled:opacity-30"
            >
              <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      </section>

      <KakaoAd2 position={'left'} />
      <KakaoAd3 position={'right'} />
    </>
  );
};

export default RankingPage;
