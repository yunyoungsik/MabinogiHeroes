'use client';

import React, { useState } from 'react';
import HallOfHonorItem from './HallOfHonorItem';
import RankingItem from './RankingItem';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useScrollHandler } from '@/utils/useScrollAD';
import CoupangAd2 from '../AD/CoupangAd2';
import CoupangAd1 from '../AD/CoupangAd1';

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
      <div className="w-full min-h-[100vh] pt-[66px] flex items-center justify-center bg-mainColor">
        <div className="max-w-[1280px] w-full h-auto m-auto flex flex-col gap-2">
          <div className="max-w-[1280px] w-full h-[100px] mt-4 m-auto bg-basicBlack/50">
            <CoupangAd1 />
          </div>
          {/* 상단 버튼 (종류, 기준 선택) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="pl-4 text-basicGrey">종류</span>
              {['명예의전당', '실시간랭킹'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setRankType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-solid border-basicGrey ${
                    rankType === index ? 'text-white bg-basicBlack' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="pl-4 text-basicGrey">기준</span>
              {['공격력', '마법공격력'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-solid border-basicGrey ${
                    type === index ? 'text-white bg-basicBlack' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <span className="text-[0.75rem] text-basicGrey pl-[16px] md:pl-0">
              {rankType === 0
                ? '명예의 전당 랭킹은 매일 오전 9시 실시간 랭킹 순위를 기준으로 반영됩니다.(공격력 최대 200위 / 마법공격력 최대 100위)'
                : '실시간 랭킹 정보는 1시간마다 반영됩니다.(공격력 최대 4,000위 / 마법공격력 최대 2,000위)'}
            </span>
          </div>

          {/* 명예의전당 vs 실시간랭킹 컴포넌트 렌더링 */}
          {rankType === 0 ? (
            <HallOfHonorItem type={type} localPage={localPage} />
          ) : (
            <RankingItem type={type} localPage={localPage} />
          )}

          {/* 페이지네이션 */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={localPage === 1}
              className="w-[3rem] h-[3rem] flex items-center justify-center bg-white border border-solid border-basicGrey/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNextPage}
              disabled={localPage >= maxPage}
              className="w-[3rem] h-[3rem] flex items-center justify-center bg-white border border-solid border-basicGrey/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <CoupangAd2 position={'left'} />
      <CoupangAd2 position={'right'} />
    </>
  );
};

export default RankingPage;
