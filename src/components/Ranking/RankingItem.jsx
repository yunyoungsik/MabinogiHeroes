'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
// store
import { useRankingStore } from '@/store/useRankingStore';
import { getRankBgClass } from '@/utils/getRankBgclass';

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

  // 해당 type의 데이터 가져오기
  const rankingList = type === 0 ? rankings.ad : rankings.ap;

  // localPage에 맞는 데이터 잘라내기 (메모이제이션)
  const currentData = useMemo(() => {
    const startIndex = (localPage - 1) * pageSize;
    return rankingList.slice(startIndex, startIndex + pageSize);
  }, [rankingList, localPage, pageSize]);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-main"
        aria-live="polite"
        role="status"
        aria-busy="true"
      >
        <span className="loader" aria-label="로딩 중..."></span>
      </div>
    );
  }

  return (
    <section
      aria-labelledby="ranking-title"
      className="w-full h-full py-2 px-3 border border-solid border-customGrey500/30 rounded-sm bg-white"
    >
      <header>
        <h2 id="ranking-title" className="inline-block py-2 px-3 text-sm font-bold">
          실시간 랭킹 - {type === 0 ? '공격력' : '마법공격력'}
        </h2>
      </header>

      <table className="w-full text-sm leading-4">
        <caption className="sr-only">
          실시간 랭킹 - {type === 0 ? '공격력' : '마법공격력'} 기준의 사용자 순위
        </caption>

        <colgroup>
          <col width="10%" />
          <col />
          <col width="10%" />
        </colgroup>

        {/* 테이블 헤더 */}
        <thead>
          <tr className="h-8 text-customGrey500">
            <th scope="col">순위</th>
            <th scope="col" className="text-left">
              닉네임
            </th>
            <th scope="col">스코어</th>
          </tr>
        </thead>

        {/* 테이블 본문 */}
        <tbody aria-live="polite">
          {currentData.length === 0 ? (
            // 데이터 로딩 오류 시
            <tr className="h-12">
              <td colSpan={3} className="text-center text-customGrey500 font-bold">
                데이터를 불러오는 문제가 발생했습니다.
              </td>
            </tr>
          ) : (
            // 데이터 로딩 성공 시
            currentData.map((user) => (
              <tr
                key={user.ranking}
                className={`h-12 hover:bg-customGrey100 border-b border-solid border-customGrey100 last:border-b-0 ${getRankBgClass(
                  user.ranking
                )}`}
              >
                {/* 순위 */}
                <td className={`text-center ${user.ranking <= 3 ? 'bg-laurel' : ''}`}>
                  {user.ranking}
                </td>

                {/* 닉네임 */}
                <td>
                  <Link href={`/user/${user.character_name}`} className="hover:underline">
                    {user.character_name}
                  </Link>
                </td>

                {/* 스코어 */}
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
