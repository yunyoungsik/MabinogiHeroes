import React, { useEffect, useMemo } from 'react';
// store
import { useRankingStore } from '@/store/useRankingStore';
// components
import RankLayout from '../RankLayout';
import Loading from '@/components/ui/Loading';

const HallOfHonor = ({type, localPage}) => {
  const { loading, hallOfHonors, fetchHallOfHonors } = useRankingStore();

  useEffect(() => {
    fetchHallOfHonors({ type });
  }, [type, fetchHallOfHonors]);

  const pageSize = 10;
  const rankingList = type === 0 ? hallOfHonors.ad : hallOfHonors.ap;
  const startIndex = (localPage - 1) * pageSize;
  const endIndex = localPage * pageSize;
  const currentData = useMemo(
    () => rankingList.slice(startIndex, endIndex),
    [rankingList, startIndex, endIndex]
  );

  if (loading || currentData.length === 0) {
    <Loading />;
  }

  return <RankLayout data={currentData} />;
};

export default HallOfHonor;
