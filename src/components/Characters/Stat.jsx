import React from 'react';

const Stat = ({ data }) => {
  const statMappings = {
    ATK: '공격력',
    MATK: 'MATK',
    DEF: '방어력',
    STR: '힘',
    DEX: '민첩',
    INT: '지능',
    WILL: '의지',
    LUCK: '행운',
    HP: '생명력',
    STAMINA: '스태미나',
    HEAVY_LOAD: 'HEAVY_LOAD',
    MEDIUM_LOAD: 'MEDIUM_LOAD',
    ATK_Speed: '공격속도',
    ATK_Absolute: 'ATK_Absolute',
    Critical: '크리티컬 피해량',
    CritFactor: '크리티컬',
    Res_Critical: '크리티컬 저항',
    Balance: '밸런스',
    TOWN_SPEED: '이동속도(마을)',
    SKILL_RANK_SUM: '스킬 랭크(합계)',
    ATK_LimitOver: '공격력 제한 해제',
    Immunity: '대항력',
  };

  const renderStat = (statId, label, defaultValue = '-') => {
    const foundStat = data.stat?.stat.find((stat) => stat.stat_id === statId);
    return (
      <li className="h-[2rem] flex items-center justify-between px-5" key={statId}>
        <p className="text-basicGrey">{statMappings[statId]}</p>
        <p className={`font-bold text-basicBlack/60 ${foundStat ? '' : 'italic'}`}>
          {foundStat ? foundStat.stat_value : defaultValue}
        </p>
      </li>
    );
  };

  return (
    <section className="w-full pt-[20px] bg-white">
      <h2 className="font-bold px-5 text-[1.2rem]">능력치</h2>
      <ul className="text-[0.9rem]">
        <li className="ATK border-y border-solid border-basicGrey/20 bg-white">
          <ul>
            {renderStat('ATK')}
            {renderStat('ATK_LimitOver')}
            {renderStat('Balance')}
          </ul>
        </li>
        <li className="STAT border-b border-solid border-basicGrey/20 bg-basicGrey/10">
          <ul>
            {renderStat('HP')}
            {renderStat('STR')}
            {renderStat('DEX')}
            {renderStat('INT')}
            {renderStat('WILL')}
            {renderStat('LUCK')}
            {renderStat('STAMINA')}
          </ul>
        </li>
        <li className="CRITICAL border-b border-solid border-basicGrey/20 bg-basicGrey/10">
          <ul>
            {renderStat('CritFactor')}
            {renderStat('Critical')}
            {renderStat('Res_Critical')}
          </ul>
        </li>
        <li className="SPEED border-b border-solid border-basicGrey/20 bg-basicGrey/10">
          <ul>
            {renderStat('ATK_Speed')}
            {renderStat('TOWN_SPEED')}
          </ul>
        </li>
        <li className="OUTHER border-b border-solid border-basicGrey/20 bg-basicGrey/10">
          <ul>
            {renderStat('SKILL_RANK_SUM')}
            {renderStat('Immunity')}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Stat;