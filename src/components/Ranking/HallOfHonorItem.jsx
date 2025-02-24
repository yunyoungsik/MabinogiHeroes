'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
// store
import { useRankingStore } from '@/store/useRankingStore';

const HallOfHonorItem = ({ type, localPage }) => {
  const { loading, hallOfHonors, fetchHallOfHonors } = useRankingStore();

  useEffect(() => {
    if (hallOfHonors.ad.length === 0 || hallOfHonors.ap.length === 0) {
      fetchHallOfHonors({ type });
    }
  }, [type]);

  const pageSize = 10;
  const rankingList = type === 0 ? hallOfHonors.ad : hallOfHonors.ap;
  const startIndex = (localPage - 1) * pageSize;
  const endIndex = localPage * pageSize;
  const currentData = rankingList.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white">
      <div>
        <h2 className="inline-block py-2 px-3 text-[0.75rem] font-bold">
          명예의전당 - {type === 0 ? '공격력' : '마법공격력'}
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
                key={user.character_name}
                className={`h-[3rem] transition-colors hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0 ${
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
                <td className="text-center">{user.score.toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default HallOfHonorItem;
