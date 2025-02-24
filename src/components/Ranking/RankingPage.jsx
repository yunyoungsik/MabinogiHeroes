'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
// components
import HallOfHonorItem from './HallOfHonorItem';
import RankingItem from './RankingItem';
import CoupangAd2 from '../AD/CoupangAd2';
import CoupangAd1 from '../AD/CoupangAd1';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';

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
      <div className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-[8px] px-[12px]">
          <p className='text-customGrey600 font-bold'>랭킹</p>
          <ul className="text-[0.75rem] text-customGrey500">
            <li>
              명예의 전당 랭킹은 매일 오전 9시 실시간 랭킹 순위를 기준으로 반영됩니다.(공격력 최대
              200위 / 마법공격력 최대 100위)
            </li>
            <li>
              실시간 랭킹 정보는 1시간마다 반영됩니다.(공격력 최대 4,000위 / 마법공격력 최대
              2,000위)
            </li>
          </ul>
        </div>
      </div>
      
      <div className="w-full h-full">
        <div className="max-w-[1280px] w-full h-auto m-auto flex flex-col gap-2">
          {/* 광고 */}
          <div className="max-w-[1280px] w-full h-[100px] mt-2 m-auto bg-customGrey900/30">
            {/* <CoupangAd1 /> */}
          </div>
          {/* 상단 버튼 (종류, 기준 선택) */}
          <div className="flex flex-row gap-2 p-4 bg-white border border-solid border-customGrey500/30 rounded-sm">
            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="text-customGrey500">종류</span>
              {['명예의전당', '실시간랭킹'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setRankType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-solid border-customGrey500 ${
                    rankType === index ? 'text-white bg-customGrey900' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="pl-4 text-customGrey500">기준</span>
              {['공격력', '마법공격력'].map((label, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setType(index);
                    setLocalPage(1); // 페이지 초기화
                  }}
                  className={`py-1 px-4 rounded-2xl border border-solid border-customGrey500 ${
                    type === index ? 'text-white bg-customGrey900' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
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
              className="w-[3rem] h-[3rem] flex items-center justify-center bg-white hover:bg-customGrey100 border border-solid border-customGrey500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={handleNextPage}
              disabled={localPage >= maxPage}
              className="w-[3rem] h-[3rem] flex items-center justify-center bg-white hover:bg-customGrey100 border border-solid border-customGrey500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
