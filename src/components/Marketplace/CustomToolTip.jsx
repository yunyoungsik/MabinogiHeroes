import { formatNumber } from '@/utils/formatNumber';
import React from 'react';

const CustomToolTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const filteredPayload = payload.filter((item) => item.name !== 'band');

  // 안전한 label 처리
  const formattedLabel = label
    ? new Date(label).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '날짜 정보 없음';

  // 색상 매핑
  const colorMap = {
    평균가: '#191f28',
  };

  return (
    <div
      role="tooltip"
      aria-live="polite"
      aria-hidden={!active}
      className="bg-white p-2 rounded shadow-md text-black"
    >
      <p className="text-[0.75rem] text-customGrey600">
        <time dateTime={new Date(label).toISOString()}>{formattedLabel}</time>
      </p>
      {filteredPayload.map((item) => (
        <p
          key={item.name}
          style={{ color: colorMap[item.name] || item.stroke }}
          className="text-[0.875rem] font-bold"
          aria-label={`${item.name} 값: ${formatNumber(item.value)} 골드`}
        >
          {item.name}: {formatNumber(item.value)} 골드
        </p>
      ))}
    </div>
  );
};

export default CustomToolTip;
