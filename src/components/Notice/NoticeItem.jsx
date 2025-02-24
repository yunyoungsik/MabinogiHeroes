import convertTime from '@/utils/convertTime';
import timeAgo from '@/utils/timeAgo';
import React from 'react';

const NoticeItem = ({ notice = [], patch = [] }) => {
  const enrichedNotice = notice.map((item) => ({ ...item, type: 'notice' }));
  const enrichedPatch = patch.map((item) => ({ ...item, type: 'patch' }));

  // 병합 후 date 기준으로 내림차순 정렬
  const data = [...enrichedNotice, ...enrichedPatch].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="w-full h-full py-2 px-3 border border-solid border-basicGrey/30 rounded-sm bg-white">
      <div>
        <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">공지사항</h2>
      </div>
      <table className="w-full text-[0.75rem] leading-4">
        <colgroup>
          <col width={'10%'} />
          <col />
          <col width={'10%'} />
        </colgroup>
        <thead>
          <tr className="h-[2rem] text-basicBlack/50">
            <th className='break-keep'>종류</th>
            <th className='break-keep'>제목</th>
            <th className='break-keep'>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(0, 5).map((item, index) => (
            <tr
              key={item.item_id}
              className="h-[3rem] transition-colors hover:bg-borderColor border-b border-solid border-borderColor last:border-b-0"
            >
              <td className="text-center">
                {item.type === 'notice' ? (
                  <span className="inline-block w-[42px] h-[20px] font-bold text-white leading-[20px] bg-[#00B6B6] rounded-lg">
                    공지
                  </span>
                ) : (
                  <span className="inline-block w-[42px] h-[20px] font-bold text-white leading-[20px] bg-[#00B6B6] rounded-lg">
                    점검
                  </span>
                )}
              </td>
              <td>
                <a href={item.url} target="_blank" className="line-clamp-1 hover:underline">
                  {item.title}
                </a>
              </td>
              <td className="text-center break-keep">{timeAgo(convertTime(item.date))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NoticeItem;
