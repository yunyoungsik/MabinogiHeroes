'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
// store
import { useRankingStore } from '@/store/useRankingStore';

const RankingItem = ({ type, localPage }) => {
  const { loading, rankings, fetchRanking } = useRankingStore();

  const pageSize = 10; // 한 페이지당 아이템 수
  const chunkSize = 500; // API에서 가져오는 단위
  const maxItems = type === 0 ? 4000 : 2000; // 최대 항목 수

  // localPage에서 필요한 chunkIndex 계산
  const chunkIndex = Math.ceil(localPage / (chunkSize / pageSize));

  // 필요한 chunk만 호출 (중복 방지)
  useEffect(() => {
    if (!rankings[type]?.[chunkIndex] && chunkIndex * chunkSize < maxItems) {
      fetchRanking({ type, page: chunkIndex });
    }
  }, [type, chunkIndex]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main">
        <span className="loader"></span>
      </div>
    );
  }

  // 해당 type의 데이터 가져오기
  const rankingList = type === 0 ? rankings.ad : rankings.ap;

  // localPage에 맞는 데이터 잘라내기
  const startIndex = (localPage - 1) * pageSize;
  const currentData = rankingList.slice(startIndex, startIndex + pageSize);

  return (
    <section className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white">
      <div>
        <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">
          실시간랭킹 - {type === 0 ? '공격력' : '마법공격력'}
        </h2>
      </div>

      <table className="w-full text-[0.875rem] leading-4">
        <colgroup>
          <col width={'10%'} />
          <col />
          <col width={'10%'} />
        </colgroup>

        <thead>
          <tr className="h-[2rem] text-customGrey500">
            <th>순위</th>
            <th className="text-left">닉네임</th>
            <th>스코어</th>
          </tr>
        </thead>

        <tbody>
          {currentData.length === 0 ? (
            <tr className="h-[3rem]">
              <td colSpan={3} className="text-center text-customGrey500 font-bold">
                데이터를 불러오는 문제가 발생했습니다.
              </td>
            </tr>
          ) : (
            currentData.map((user) => (
              <tr
                key={user.ranking}
                className={`h-[3rem] hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0 ${
                  user.ranking === 1
                    ? 'bg-rank1'
                    : user.ranking === 2
                    ? 'bg-rank2'
                    : user.ranking === 3
                    ? 'bg-rank3'
                    : ''
                }`}
              >
                <td className={`text-center ${user.ranking <= 3 ? 'bg-laurel' : ''}`}>
                  {user.ranking}
                </td>
                <td>
                  <Link href={`/user/${user.character_name}`} className="hover:underline">
                    {user.character_name}
                  </Link>
                </td>
                <td className="text-center">{user.score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default RankingItem;
