import React from 'react';

const Skill = ({ data }) => {
  console.log(data);

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <section className="w-full p-5 bg-white mb-2">
      <h2 className="font-bold px-5 text-[1.2rem]">스킬</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data?.map((skill, index) => (
          <li
            key={index}
            className="w-full h-full px-5 py-2 flex flex-col justify-center border border-solid border-basicGrey/60 rounded-[5px] bg-darkBlue"
          >
            <p className="font-bold text-white">{skill.skill_name || '-'}</p>
            <p className="text-[0.75rem] text-basicGrey">{skill.item_name ||'-'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
