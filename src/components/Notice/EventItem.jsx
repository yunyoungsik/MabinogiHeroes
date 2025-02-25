import React from 'react';
// uitls
import convertTime from '@/utils/convertTime';

const EventItem = ({ event = [] }) => {
  // 이벤트 데이터 상위 5개 추출
  const recentEvents = event.slice(0, 5);

  // 날짜 포맷팅 함수
  const formatDate = (date) => convertTime(date).split(' ')[0];

  return (
    <section
      className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white"
      aria-labelledby="event-section"
    >
      {/* 섹션 헤더 */}
      <div>
        <h2 id="event-section" className="inline-block py-2 px-3 text-[0.75rem] font-bold">
          이벤트
        </h2>
      </div>

      {/* 이벤트 테이블 */}
      <table className="w-full text-[0.875rem] leading-4">
        <colgroup>
          <col width="10%" />
          <col />
          <col width="15%" />
          <col width="15%" />
        </colgroup>

        {/* 테이블 헤더 */}
        <thead>
          <tr className="h-[2rem] text-customGrey500">
            <th className="break-keep">종류</th>
            <th className="break-keep">제목</th>
            <th className="break-keep">시작</th>
            <th className="break-keep">종료</th>
          </tr>
        </thead>

        {/* 테이블 본문 */}
        <tbody>
          {recentEvents.map((item, index) => (
            <tr
              key={index}
              className="h-[3rem] transition-colors hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0"
            >
              {/* 이벤트 타입 */}
              <td className="text-center">
                <span className="inline-block w-[42px] h-[20px] text-[0.75rem] font-bold text-white leading-[20px] bg-[#EB7000] rounded-lg">
                  이벤트
                </span>
              </td>

              {/* 이벤트 제목 */}
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

              {/* 시작 및 종료 날짜 */}
              <td className="text-customGrey500 text-center break-keep">
                <time dateTime={new Date(item.date_event_start).toISOString()}>
                  {formatDate(item.date_event_start)}
                </time>
              </td>
              <td className="text-customGrey500 text-center break-keep">
                <time dateTime={new Date(item.date_event_end).toISOString()}>
                  {formatDate(item.date_event_end)}
                </time>
              </td>
            </tr>
          ))}

          {/* 이벤트 없음 처리 */}
          {recentEvents.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-customGrey500">
                진행 중인 이벤트가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default EventItem;
