import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const ChartHeader = ({ item }) => {
  if (!item || item.length < 2) return null;

  // 첫 번째와 마지막 평균가
  const firstPrice = item[0].average_price;
  const lastPrice = item[item.length - 1].average_price;

  // 변화율 계산
  const changePercentage = Math.round(((lastPrice - firstPrice) / firstPrice) * 100 * 100) / 100;
  const isPositive = changePercentage >= 0;

  return (
    <header className="mb-4 mt-7 px-7">
      <h2 className="text-xs text-gray-400">{item[0].item_name}</h2>

      <div className="flex items-center">
        {/* 마지막 평균가 (가격) */}
        <p
          className="text-2xl font-bold"
          aria-label={`현재 평균가: ${lastPrice.toLocaleString()} 골드`}
        >
          {lastPrice.toLocaleString()}
          <span className="text-[12px] text-gray-400">골드</span>
        </p>

        {/* 변화율 (상승/하락) */}
        <p
          className={`text-sm flex ml-3 ${isPositive ? 'text-customRed500' : 'text-customBlue500'}`}
          aria-label={`변화율: ${isPositive ? '상승' : '하락'} ${Math.abs(changePercentage)}%`}
        >
          {isPositive ? (
            <TrendingUp className="w-5 h-5 mr-1" aria-hidden="true" />
          ) : (
            <TrendingDown className="w-5 h-5 mr-1" aria-hidden="true" />
          )}
          <span>
            {isPositive ? '+' : '-'}
            {Math.abs(changePercentage)}%
          </span>
        </p>
      </div>
    </header>
  );
};

export default ChartHeader;
