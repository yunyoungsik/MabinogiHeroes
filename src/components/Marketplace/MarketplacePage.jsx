import React from 'react';

const MarketplacePage = () => {
  return (
    <div className="w-full min-h-[100vh] pt-[66px] flex items-center justify-center bg-mainColor">
      <div className="max-w-[1280px] w-full h-auto m-auto flex flex-col gap-2">
        현재 평균가는 마지막으로 갱신된 거래 기록의 평균 거래가로 확인 가능합니다. 최근 24시간 내
        10건 이상의 거래가 발생한 아이템의 거래 기록이 조회됩니다. 골드 거래소의 거래 내역이
        포함되며, 100만 골드 당 가격 기준으로 조회됩니다. (2024년 12월 19일 추가)
      </div>
    </div>
  );
};

export default MarketplacePage;
