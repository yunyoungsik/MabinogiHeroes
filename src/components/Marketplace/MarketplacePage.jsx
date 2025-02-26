'use client';

import React, { useCallback, useState } from 'react';
import { Search } from 'lucide-react';
// components
import Chart from './Chart';
import ChartHeader from './ChartHeader';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
// store
import { useMarketplaceStore } from '@/store/useMarketplaceStore';

const MarketplacePage = () => {
  const { loading, error, item, cache, fetchMarketplace } = useMarketplaceStore();
  const [itemName, setItemName] = useState('');

  // 아이템 검색 핸들러
  const handleSearch = useCallback(() => {
    const trimmedItemName = itemName.trim();
    if (!trimmedItemName) return;
    fetchMarketplace({ itemName: trimmedItemName });
  }, [itemName, fetchMarketplace]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 광고
  useScrollHandler('.ad__banner2', 100);

  return (
    <>
      {/* 거래소 정보 섹션 */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-[8px] px-[12px]">
          <h2 className="text-customGrey600 font-bold">거래소</h2>
          <ul className="text-[0.75rem] text-customGrey500">
            <li>현재 평균가는 마지막으로 갱신된 거래 기록의 평균 거래가로 확인 가능합니다.</li>
            <li>최근 24시간 내 10건 이상의 거래가 발생한 아이템의 거래 기록이 조회됩니다.</li>
            <li>골드 거래소의 거래 내역이 포함되며, 100만 골드 당 가격 기준으로 조회됩니다.</li>
          </ul>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <div className="w-full h-full flex-1 flex flex-col">
        <div className="max-w-[1280px] w-full h-full mx-auto flex-1 flex flex-col gap-2">
          {/* 광고 배너 */}
          <KakaoAd1 customClass="max-w-[1280px] w-full h-[100px] mt-2 mx-auto bg-customGrey900/30" />

          {/* 거래소 섹션 */}
          <section
            className="w-full h-full p-6 pb-3 flex-1 flex flex-col bg-white border border-solid border-customGrey500/30 rounded-sm"
            aria-labelledby="marketplace-title"
          >
            <div className="w-full flex items-center justify-between">
              {/* 섹션 제목 */}
              <h2 id="marketplace-title" className="inline-block py-2 px-3 text-sm font-bold">
                거래소
              </h2>

              {/* 검색 입력 */}
              <div className="relative">
                <label htmlFor="item-search" className="sr-only">
                  아이템 검색
                </label>
                <input
                  id="item-search"
                  type="text"
                  placeholder="아이템명을 입력하세요."
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="min-w-[250px] h-[40px] pl-[12px] pr-[32px] bg-customGrey200 rounded-md"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="absolute top-1/2 right-2 -translate-y-1/2"
                  aria-label="검색"
                >
                  <Search className="stroke-customGrey500 size-4" />
                </button>
              </div>
            </div>

            {/* 차트 컴포넌트 */}
            <ChartHeader item={item} />
            <Chart loading={loading} error={error} item={item} />
          </section>
        </div>
      </div>

      {/* 사이드 광고 */}
      <KakaoAd2 position="left" />
      <KakaoAd3 position="right" />
    </>
  );
};

export default MarketplacePage;
