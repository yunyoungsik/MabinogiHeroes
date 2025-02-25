import React from 'react';
// utils
import convertTime from '@/utils/convertTime';
import timeAgo from '@/utils/timeAgo';

// 알림 유형 배지 컴포넌트
const Badge = ({ type }) => (
  <span
    className={`inline-block w-[42px] h-[20px] text-[0.75rem] font-bold text-white leading-[20px] rounded-lg ${
      type === 'notice' ? 'bg-[#00B6B6]' : 'bg-[#00B6B6]'
    }`}
  >
    {type === 'notice' ? '공지' : '점검'}
  </span>
);

const NoticeItem = ({ notice = [], patch = [] }) => {
  // 공지와 패치 데이터를 결합하고, Date 변환을 사전에 수행 (성능 최적화)
  const combinedData = [...notice, ...patch].map((item) => ({
    ...item,
    type: notice.includes(item) ? 'notice' : 'patch',
    timestamp: new Date(item.date).getTime(),
  }));

  // 최신순으로 정렬
  const sortedData = combinedData.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <section
      aria-labelledby="notice-section"
      className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white"
    >
      {/* 제목 및 접근성 강화 */}
      <header>
        <h2 id="notice-section" className="inline-block py-2 px-3 text-[0.75rem] font-bold">
          공지사항
        </h2>
      </header>

      {/* 공지사항 테이블 */}
      <table className="w-full text-[0.875rem] leading-4">
        <caption className="sr-only">최신 공지사항 및 점검 정보</caption>

        <colgroup>
          <col width="10%" />
          <col />
          <col width="10%" />
        </colgroup>

        {/* 테이블 헤더 */}
        <thead>
          <tr className="h-[2rem] text-customGrey500">
            <th className="break-keep">종류</th>
            <th className="break-keep">제목</th>
            <th className="break-keep">작성일</th>
          </tr>
        </thead>

        {/* 테이블 본문 */}
        <tbody>
          {sortedData.slice(0, 5).map((item) => (
            <tr
              key={item.url}
              className="h-[3rem] transition-colors hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0"
            >
              <td className="text-center">
                <Badge type={item.type} />
              </td>
              <td>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="line-clamp-1 hover:underline"
                >
                  {item.title}
                </a>
              </td>
              <td className="text-customGrey500 text-center break-keep">
                {timeAgo(convertTime(item.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NoticeItem;
