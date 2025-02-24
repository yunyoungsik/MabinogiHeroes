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
    <div className="mb-4 mt-7 px-7">
      <p className="text-xs text-gray-400">{item[0].item_name}</p>
      <div className="flex items-center">
        {/* 마지막 평균가 표시 */}
        <p className="text-2xl font-bold">
          {lastPrice.toLocaleString()}
          <span className="text-[12px] text-gray-400">골드</span>
        </p>

        {/* 변화율 표시 */}
        <p className={`text-sm flex ml-3 ${isPositive ? 'text-customRed500' : 'text-customBlue500'}`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 mr-1" />
          ) : (
            <TrendingDown className="w-5 h-5 mr-1" />
          )}
          <span>
            {isPositive ? '+' : '-'}
            {Math.abs(changePercentage)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChartHeader;
