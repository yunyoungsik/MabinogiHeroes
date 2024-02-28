'use client';

import React, { useEffect, useState } from 'react';
import Stat from './Stat';
import Title from './Title';
import Item from './Item';

const Character = ({ name }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/characterData?name=${encodeURIComponent(name)}`);
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('API 요청 중 에러가 발생했습니다: ', error);
      }
    };

    fetchData();
  }, [name]);

  const bgCharacter = (characterClassName) => {
    const classMappings = {
      소우: 'bg-sou',
      아켈: 'bg-achel',
      체른: 'bg-czern',
      라티야: 'bg-latiya',
      레티: 'bg-letty',
      단아: 'bg-danah',
      테사: 'bg-tessa',
      카엘: 'bg-kael',
      레서: 'bg-lethor',
      벨: 'bg-bel',
      미울: 'bg-miul',
      그림덴: 'bg-grimden',
      미리: 'bg-miri',
      델리아: 'bg-delia',
      헤기: 'bg-hagie',
      아리샤: 'bg-arisha',
      린: 'bg-lynn',
      허크: 'bg-hurk',
      벨라: 'bg-vella',
      카이: 'bg-kay',
      카록: 'bg-kalok',
      이비: 'bg-evy',
      피오나: 'bg-fiona',
      리시타: 'bg-lethita',
    };

    return classMappings[characterClassName?.toLowerCase()] || '';
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-[66px]">
      <div className="sm:block md:flex justify-between max-w-[1280px] h-full m-auto">
        <div className="min-w-[300px]">
          <section className={`w-full h-[300px] ${bgCharacter(data.basic?.character_class_name)} relative`}>
            <div className="w-full h-full p-2 bg-black/50">
              {data.titleEquipment?.title_equipment
                .slice()
                .reverse()
                .map((title, index) => (
                  <span className="font-bold text-[0.9rem] text-white mr-1" key={index}>
                    {title.title_name}
                  </span>
                ))}
              <h2 className="font-bold text-[1.5rem] text-white">{data.basic?.character_name}</h2>
              <div className="absolute bottom-2">
                <p className="text-[0.9rem] text-white font-bold mb-4">
                  <span className="text-label">레벨</span>
                  {data.basic?.character_level}
                </p>
                <p className="text-[0.9rem] text-white font-bold mb-4">
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
          <Stat data={data} />
        </div>
        <div className="max-w-[970px] ">
          <Item data={data} />
          <Title data={data} />
        </div>
      </div>
    </div>
  );
};

export default Character;
