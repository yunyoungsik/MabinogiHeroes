'use client';

import LiveRankingSection from './LiveRankingSection';
import HallOfHonorSection from './HallOfHonorSection';
import styles from './Ranking.module.scss';

const Ranking = () => {
  return (
    <div className={styles.ranking}>
      <LiveRankingSection view={5} localPage={1} />
      <HallOfHonorSection view={5} localPage={1} />
      </div>
  );
};

export default Ranking;
