import React from 'react';

const Skill = ({ data }) => {
  if (!data) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-main"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span
          className="animate-spin rounded-full h-8 w-8 border-t-2 border-customOrange300/80"
          aria-label="로딩 중"
        ></span>
      </div>
    );
  }
  return (
    <section
      className="w-full px-3 pt-5 md:p-5 mb-2 bg-white border border-solid border-customGrey500/30 rounded-sm"
      aria-labelledby="skill-section-title"
    >
      <h2 className="font-bold px-5 text-[1.2rem]">스킬</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data?.map((skill, index) => (
          <li
            key={index}
            className="w-full h-full px-5 py-2 flex flex-col justify-center border border-solid border-customGrey500/60 rounded-[5px] bg-customGrey900"
          >
            <p className="font-bold text-white">{skill.skill_name || '-'}</p>
            <p className="text-[0.75rem] text-white/50">{skill.item_name || '-'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
