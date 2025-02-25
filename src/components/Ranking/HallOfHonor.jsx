import React from 'react';
// components
import HallOfHonorItem from './HallOfHonorItem';

const HallOfHonor = () => {
  return (
    <section
      className="sm:w-full md:max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-2"
      aria-labelledby="'hall-of-honor-section"
    >
      <h2 id="hall-of-honor-section" className="sr-only">
        명예의전당 - 공격력과 마법공격력
      </h2>

      {['공격력', '마법공격력'].map((label, index) => (
        <HallOfHonorItem key={label} type={index} localPage={1} />
      ))}
    </section>
  );
};

export default HallOfHonor;
