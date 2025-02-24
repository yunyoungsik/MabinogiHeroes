import convertTime from '@/utils/convertTime';
import React from 'react';

const EventItem = ({ event }) => {
  return (
    <section className="w-full h-full py-2 px-3 border border-solid border-basicGrey/30 rounded-sm bg-white">
      <div>
        <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">이벤트</h2>
      </div>
      <table className="w-full text-[0.75rem] leading-4">
        <colgroup>
          <col width={'10%'} />
          <col />
          <col width={'15%'} />
          <col width={'15%'} />
        </colgroup>
        <thead>
          <tr className="h-[2rem] text-basicBlack/50">
            <th className="break-keep">종류</th>
            <th className="break-keep">제목</th>
            <th className="break-keep">시작</th>
            <th className="break-keep">종료</th>
          </tr>
        </thead>
        <tbody>
          {event?.slice(0, 5).map((item, index) => (
            <tr
              key={item.item_id}
              className="h-[3rem] transition-colors hover:bg-borderColor border-b border-solid border-borderColor last:border-b-0"
            >
              <td className="text-center">
                <span className="inline-block w-[42px] h-[20px] font-bold text-white leading-[20px] bg-[#EB7000] rounded-lg">
                  이벤트
                </span>
              </td>
              <td>
                <a href={item.url} target="_blank" className="line-clamp-1 hover:underline">
                  {item.title}
                </a>
              </td>
              <td className="text-center break-keep">
                {convertTime(item.date_event_start).split(' ')[0]}
              </td>
              <td className="text-center break-keep">
              {convertTime(item.date_event_end).split(' ')[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EventItem;
