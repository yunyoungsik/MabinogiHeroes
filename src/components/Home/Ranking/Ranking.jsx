'use client';

import LiveRankingSection from './LiveRankingSection';
import HallOfHonorSection from './HallOfHonorSection';
import styles from './Ranking.module.scss';

const Ranking = () => {
  return (
    <>
      <LiveRankingSection view={5} localPage={1} />
      <HallOfHonorSection view={5} localPage={1} />
    </>
  );
};

export default Ranking;
