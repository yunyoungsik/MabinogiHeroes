import React from 'react';
import HallOfHonorItem from './HallOfHonorItem';

const HallOfHonor = () => {
  return (
    <div className="sm:w-full md:max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-2">
      <HallOfHonorItem type={0} localPage={1} />
      <HallOfHonorItem type={1} localPage={1} />
    </div>
  );
};

export default HallOfHonor;
