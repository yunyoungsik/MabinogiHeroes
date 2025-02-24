'use client';

import React, { useState } from 'react';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
// components
import CoupangAd1 from '../AD/CoupangAd1';
import Chart from './Chart';
import ChartHeader from './ChartHeader';
// store
import { useMarketplaceStore } from '@/store/useMarketplaceStore';
import { Search } from 'lucide-react';
import CoupangAd2 from '../AD/CoupangAd2';

const MarketplacePage = () => {
  const { loading, error, item, fetchMarketplace } = useMarketplaceStore();
  const [itemName, setItemName] = useState('');

  const handleSearch = () => {
    if (!itemName?.trim()) return;

    if (itemName.trim()) {
      fetchMarketplace({ itemName });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 광고
  useScrollHandler('.ad__banner2', 100);

  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-[8px] px-[12px]">
          <p className="text-customGrey600 font-bold">거래소</p>
          <ul className="text-[0.75rem] text-customGrey500">
            <li>현재 평균가는 마지막으로 갱신된 거래 기록의 평균 거래가로 확인 가능합니다.</li>
            <li>최근 24시간 내 10건 이상의 거래가 발생한 아이템의 거래 기록이 조회됩니다.</li>
            <li>골드 거래소의 거래 내역이 포함되며, 100만 골드 당 가격 기준으로 조회됩니다.</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full flex-1 flex flex-col">
        <div className="max-w-[1280px] w-full h-full mx-auto flex-1 flex flex-col gap-2">
          {/* 광고 */}
          <div className="max-w-[1280px] w-full h-[100px] mt-2 mx-auto bg-customGrey900/30">
            {/* <CoupangAd1 /> */}
          </div>

          <section className="w-full h-full p-1 flex-1 flex flex-col bg-white">
            <div className="w-full flex items-center justify-between">
              <div>
                <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">
                  거래소
                </h2>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder='아이템명을 입력 하세요.'
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="min-w-[250px] h-[40px] pl-[26px] bg-customGrey200 rounded-md"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="absolute top-[50%] translate-y-[-50%] left-[6px]"
                >
                  <Search className="stroke-customGrey500 size-[16px]" />
                </button>
              </div>
            </div>
            <ChartHeader item={item} />

            {loading ? (
              <div className="flex items-center justify-center w-full min-h-[548px]">
                <span className="loader"></span>
              </div>
            ) : (
              <Chart error={error} item={item} />
            )}
          </section>
        </div>
      </div>

      <CoupangAd2 position={'left'} />
      <CoupangAd2 position={'right'} />
    </>
  );
};

export default MarketplacePage;
