'use client';

import React, { useEffect, useState } from 'react';
// components
import Stat from './Stat';
import Item from './Item';
import Avatar from './Avatar';
import Skill from './Skill';
// utils
import convertTime from '@/utils/convertTime';
import timeAgo from '@/utils/timeAgo';
// store
import { useUserStore } from '@/store/useUserStore';

const Character = ({ name }) => {
  const { loading, basic, guild, itemEquipment, stat, title, titleEquipment, fetchUser } =
    useUserStore();
  const [activeTab, setActiveTab] = useState('item');

  useEffect(() => {
    if (name) {
      fetchUser(name);
    }
  }, [name]);

  // 캐릭터 백그라운드 이미지
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

  // 타이틀
  const leftTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '좌측');
  const fixedTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '고정');

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="w-full h-full pt-[66px] bg-mainColor">
      <div className="sm:block md:flex justify-between max-w-[1280px] h-full m-auto">
        <div className="min-w-[300px]">
          <section
            className={`w-full h-[300px] ${bgCharacter(basic?.character_class_name)} relative`}
          >
            <div className="w-full h-full p-2 bg-black/50">
              <div className="flex">
                {leftTitle && (
                  <span className="font-bold text-[0.75rem] text-white mr-1">
                    {leftTitle?.title_name}
                  </span>
                )}
                {fixedTitle && (
                  <span className="font-bold text-[0.75rem] text-white mr-1">
                    {fixedTitle?.title_name}
                  </span>
                )}
              </div>
              <h2 className="font-bold text-[1.5rem] text-white">{basic?.character_name}</h2>
              <p className="font-bold text-[0.75rem] text-white">[{basic?.cairde_name || '-'}]</p>

              <div className="absolute bottom-2 flex flex-col gap-4">
                <p className="text-[0.75rem] text-white font-bold">
                  <span className="text-label">레벨</span>
                  {basic?.character_level || 0}
                </p>
                <p className="text-[0.75rem] text-white font-bold">
                  <span className="text-label">캐릭터</span>
                  {basic?.character_class_name || '-'}
                </p>
                <p className="text-[0.75rem] text-white font-bold">
                  <span className="text-label">길드</span>
                  {guild?.guild_name || '-'}
                </p>
                <p className="relative text-[0.75rem] text-white font-bold group">
                  <span className="text-label">타이틀</span>
                  {basic?.total_title_count || '-'}
                  {basic?.title_stat && (
                    <div className="ballon group-hover:inline-block">
                      {basic?.title_stat.map((stat, index) => (
                        <p key={index}>
                          <span>{stat.stat_name}</span>
                          <span>{stat.stat_value}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </p>
                <p className="text-[0.75rem] text-white font-bold">
                  <span className="text-label">마지막접속</span>
                  {basic?.character_date_last_login
                    ? timeAgo(convertTime(basic.character_date_last_login))
                    : '-'}
                </p>
              </div>
            </div>
          </section>
          <Stat data={stat} />
        </div>

        <div className="max-w-[970px] w-full ">
          <div className="flex gap-2 py-2">
            <button type="button" onClick={() => setActiveTab('item')} className={`py-1 px-4 border border-solid border-basicGrey rounded-2xl ${activeTab === 'item' ? 'text-white bg-basicBlack' : ''}`}>
              장비
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('avatar')}
              className={`py-1 px-4 border border-solid border-basicGrey rounded-2xl ${activeTab === 'avatar' ? 'text-white bg-basicBlack' : ''}`}
            >
              아바타
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('skill')}
              className={`py-1 px-4 border border-solid border-basicGrey rounded-2xl ${activeTab === 'skill' ? 'text-white bg-basicBlack' : ''}`}
            >
              스킬
            </button>
          </div>

          {activeTab === 'item' && (
            <Item data={itemEquipment?.filter((item) => item.item_equipment_page === 'Bag')} />
          )}

          {activeTab === 'avatar' && (
            <Avatar data={itemEquipment?.filter((item) => item.item_equipment_page === 'Cash')} />
          )}

          {activeTab === 'skill' && (
            <Skill data={basic?.skill_awakening} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
