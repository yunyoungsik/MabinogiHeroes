import React from 'react';
// components
import RankingItem from './RankingItem';

const Ranking = () => {
  return (
    <section
      className="sm:w-full md:max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-2"
      aria-labelledby="ranking-section"
    >
      <h2 id="ranking-section" className="sr-only">
        실시간 랭킹 - 공격력과 마법공격력
      </h2>
      
      {['공격력', '마법공격력'].map((label, index) => (
        <RankingItem key={label} type={index} localPage={1} />
      ))}
    </section>
  );
};

export default Ranking;
