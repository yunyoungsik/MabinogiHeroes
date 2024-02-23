'use client';

import React, { useEffect, useState } from 'react';

const Character = ({ name }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/characterData?name=${encodeURIComponent(name)}`
        );
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('API 요청 중 에러가 발생했습니다: ', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <main className="w-full h-full mt-[66px]">
      <div className="flex justify-between max-w-[1280px] h-full m-auto">
        <div className="w-[300px]">
          <section className="w-full h-[300px] bg-piona relative">
            <div className="w-full h-full p-2 bg-black/50">
              {data.title?.title.map((title, index) => (
                <span
                  className="font-bold text-[0.9rem] text-white"
                  key={index}
                >
                  {title.title_name}
                </span>
              ))}
              <h2 className="font-bold text-[1.2rem] text-white">
                {data.basic?.character_name}
              </h2>
              <div className="absolute bottom-2">
                <p className="text-[0.9rem] text-white font-bold mb-2">
                  <span className="text-label">레벨</span>
                  {data.basic?.character_level}
                </p>
                <p className="text-[0.9rem] text-white font-bold mb-2">
                  <span className="text-label">캐릭터</span>
                  {data.basic?.character_class_name}
                </p>
                <p className="text-[0.9rem] text-white font-bold">
                  <span className="text-label">길드</span>
                  {data.guild?.guild_name}
                </p>
              </div>
            </div>
          </section>
          <section className="w-full bg-white">
            <h2 className="hidden">스텟</h2>
            <ul className="text-[0.9rem] p-2">
              {data.stat?.stat.map((stat, index) => (
                <li key={index} className="flex items-center justify-between">
                  <p>
                    {(() => {
                      switch (stat.stat_id) {
                        case 'ATK':
                          return '공격력';
                        case 'MATK':
                          return '최소 공격력';
                        case 'DEF':
                          return '방어력';
                        case 'STR':
                          return '힘';
                        case 'DEX':
                          return '민첩';
                        case 'INT':
                          return '지능';
                        case 'WILL':
                          return '의지';
                        case 'LUCK':
                          return '행운';
                        case 'HP':
                          return '생명력';
                        case 'STAMINA':
                          return '스태미나';
                        case 'HEAVY_LOAD':
                          return 'HEAVY_LOAD';
                        case 'MEDIUM_LOAD':
                          return 'MEDIUM_LOAD';
                        case 'ATK_Speed':
                          return '공격속도';
                        case 'ATK_Absolute':
                          return 'ATK_Absolute';
                        case 'Critical':
                          return '크리티컬';
                        case 'CritFactor':
                          return 'CritFactor';
                        case 'Res_Critical':
                          return 'Res_Critical';
                        case 'Balance':
                          return '밸런스';
                        case 'TOWN_SPEED':
                          return 'TOWN_SPEED';
                        case 'SKILL_RANK_SUM':
                          return 'SKILL_RANK_SUM';
                        case 'ATK_LimitOver':
                          return '공격력 제한 해제';
                        case 'Immunity':
                          return '대항력';
                        default:
                          return stat.stat_id;
                      }
                    })()}
                  </p>
                  <p>{stat.stat_value}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className='min-w-[970px] h-full bg-black'></div>
      </div>
    </main>
  );
};

export default Character;
