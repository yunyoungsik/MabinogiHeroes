'use client';

import React, { useEffect, useState } from 'react';
// components
import Stat from './Stat';
import Item from './Item';
import Avatar from './Avatar';
import Skill from './Skill';
import CoupangAd1 from '../AD/CoupangAd1';
import CoupangAd2 from '../AD/CoupangAd2';
// utils
import convertTime from '@/utils/convertTime';
import timeAgo from '@/utils/timeAgo';
import { useScrollHandler } from '@/utils/useScrollAd';
// store
import { useUserStore } from '@/store/useUserStore';

const Character = ({ name }) => {
  const { loading, error, basic, guild, itemEquipment, stat, title, titleEquipment, fetchUser } =
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

  // 광고
  useScrollHandler('.ad__banner2', 100);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main bg-mainColor">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-main text-center bg-mainColor">
        <h2 className='text-[2rem] font-bold text-customGrey900'>MHON.KR</h2>
        <p className='text-[1.125rem]'>해당하는 캐릭터의 검색 결과가 없습니다.</p>
        <span className='text-[0.75rem] text-customGrey600'>캐릭터 명을 다시 한번 확인하시고 재시도 해주세요.</span>
      </div>
    );
  }

  // width: 100%;
  // height: calc(100vh - 327px);
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;

  // > h2 {
  //   font-size: 2rem;
  //   font-weight: bold;
  //   text-align: center;
  //   color: var(--green);
  // }

  // > p {
  //   font-size: 1.125rem;
  //   color: var(--white);
  // }

  // > span {
  //   font-size: 0.75rem;
  //   color: var(--black400);
  // }

  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-[8px] px-[12px]">
          <p className="text-customGrey600 font-bold">캐릭터 검색</p>
          <ul className="text-[0.75rem] text-customGrey500">
            <li> 마비노기 영웅전의 게임 데이터는 평균 10분 후 확인 가능합니다.</li>
            <li>
              2022년 1월 1일 이후 데이터를 조회할 수 있습니다. (단, 2022년 1월 이전에 발생한
              데이터는 응답 결과에 포함되지 않을 수 있음)
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full bg-mainColor">
        {/* 광고 */}
        <div className="max-w-[1280px] h-[100px] mx-auto mb-[8px] flex items-center justify-center mt-0 m-auto bg-customGrey900/30">
          {/* <CoupangAd1 /> */}
        </div>
        <div className="sm:block md:flex justify-between max-w-[1280px] h-full m-auto">
          <div className="min-w-[320px]">
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

          <div className="max-w-[950px] w-full ">
            <div className="flex pl-[20px] md:pl-0 gap-2 py-2">
              <button
                type="button"
                onClick={() => setActiveTab('item')}
                className={`py-1 px-4 border border-solid border-customGrey500 rounded-2xl ${
                  activeTab === 'item' ? 'text-white bg-customGrey900' : ''
                }`}
              >
                장비
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('avatar')}
                className={`py-1 px-4 border border-solid border-customGrey500 rounded-2xl ${
                  activeTab === 'avatar' ? 'text-white bg-customGrey900' : ''
                }`}
              >
                아바타
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('skill')}
                className={`py-1 px-4 border border-solid border-customGrey500 rounded-2xl ${
                  activeTab === 'skill' ? 'text-white bg-customGrey900' : ''
                }`}
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

            {activeTab === 'skill' && <Skill data={basic?.skill_awakening} />}
          </div>
        </div>
      </div>

      <CoupangAd2 position={'left'} />
      <CoupangAd2 position={'right'} />
    </>
  );
};

export default Character;
