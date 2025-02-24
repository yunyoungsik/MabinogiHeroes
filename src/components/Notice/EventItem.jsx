import React from 'react';
// uitls
import convertTime from '@/utils/convertTime';

const EventItem = ({loading, event }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[564px] bg-mainColor">
        <span className="loader"></span>
      </div>
    );
  }
  
  return (
    <section className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white">
      <div>
        <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">이벤트</h2>
      </div>
      <table className="w-full text-[0.875rem] leading-4">
        <colgroup>
          <col width={'10%'} />
          <col />
          <col width={'15%'} />
          <col width={'15%'} />
        </colgroup>
        <thead>
          <tr className="h-[2rem] text-customGrey500">
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
              className="h-[3rem] transition-colors hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0"
            >
              <td className="text-center">
                <span className="inline-block w-[42px] h-[20px] text-[0.75rem] font-bold text-white leading-[20px] bg-[#EB7000] rounded-lg">
                  이벤트
                </span>
              </td>
              <td>
                <a href={item.url} target="_blank" className="line-clamp-1 hover:underline">
                  {item.title}
                </a>
              </td>
              <td className="text-customGrey500 text-center break-keep">
                {convertTime(item.date_event_start).split(' ')[0]}
              </td>
              <td className="text-customGrey500 text-center break-keep">
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
