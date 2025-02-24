import { formatNumber } from '@/utils/formatNumber';
import React from 'react';

const CustomToolTip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  // band 항목 제외
  const filteredPayload = payload.filter((item) => item.name !== 'band');

  return (
    <div className="bg-white p-2 rounded shadow-md text-black">
      <p className="text-[0.75rem] text-customGrey600">
        {new Date(label).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      {filteredPayload.map((item) => (
        <p key={item.name} style={{ color: item.name === '평균가' ? '#191f28' : item.stroke }} className='text-[0.875rem] font-bold'>
          {item.name}: {formatNumber(item.value)} 골드
        </p>
      ))}
    </div>
  );
};

export default CustomToolTip;
