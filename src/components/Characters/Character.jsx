'use client';

import React, { useEffect, useState } from 'react';
// components
import Stat from './Stat';
import Item from './Item';
import Avatar from './Avatar';
import Skill from './Skill';
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAd2 from '../AD/KakaoAd2';
import KakaoAd3 from '../AD/KakaoAd3';
// utils
import { useScrollHandler } from '@/utils/useScrollAd';
// store
import { useUserStore } from '@/store/useUserStore';
import CharacterInfo from './CharacterInfo';
import TabNavigation from './TabNavigation';

// 캐릭터 백그라운드 이미지
const CLASS_BACKGROUND_MAP = {
  네반: 'bg-neamhain',
  사냐: 'bg-sanyaa',
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

const Character = ({ name }) => {
  const { loading, error, basic, guild, itemEquipment, stat, title, titleEquipment, fetchUser } =
    useUserStore();
  const [activeTab, setActiveTab] = useState('item');

  useEffect(() => {
    if (name) {
      fetchUser(name);
    }
  }, [name, fetchUser]);

  // 캐릭터 배경 이미지 반환
  const getCharacterBackground = (className) => CLASS_BACKGROUND_MAP[className] || '';

  // 타이틀 추출
  const leftTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '좌측');
  const fixedTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '고정');

  // 스크롤 광고 핸들러
  useScrollHandler('.ad__banner2', 100);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main bg-mainColor" role="status" aria-live="polite">
        <span className="loader" aria-label="로딩 중"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-main text-center bg-mainColor" role="alert">
        <h2 className="text-[2rem] font-bold text-customGrey900">MHON.KR</h2>
        <p className="text-[1.125rem]">해당하는 캐릭터의 검색 결과가 없습니다.</p>
        <span className="text-[0.75rem] text-customGrey600">캐릭터 명을 다시 한번 확인하시고 재시도 해주세요.</span>
      </div>
    );
  }

  return (
    <>
      <header className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto py-[8px] px-[12px]">
          <h1 className="text-customGrey600 font-bold">캐릭터 검색</h1>
          <ul className="text-[0.75rem] text-customGrey500">
            <li>마비노기 영웅전의 게임 데이터는 평균 10분 후 확인 가능합니다.</li>
            <li>2022년 1월 1일 이후 데이터를 조회할 수 있습니다. (단, 2022년 1월 이전에 발생한 데이터는 응답 결과에 포함되지 않을 수 있음)</li>
          </ul>
        </div>
      </header>


      <div className="w-full h-full bg-mainColor">
        {/* 광고 */}
        <KakaoAd1
          customClass={
            'max-w-[1280px] w-full h-[100px] mx-auto my-2 flex items-center justify-cente bg-customGrey900/30'
          }
        />

        <div className="sm:block md:flex justify-between max-w-[1280px] h-full m-auto">
          {/* 캐릭터 정보 */}
          <div className="min-w-[320px]">
            <section
              className={`relative w-full h-[300px] ${getCharacterBackground(
                basic?.character_class_name
              )} `}
            >
              <CharacterInfo
                basic={basic}
                guild={guild}
                leftTitle={leftTitle}
                fixedTitle={fixedTitle}
              />
            </section>
            <Stat data={stat} />
          </div>

          {/* 장비/아바타/스킬 탭 */}
          <section className="max-w-[950px] w-full ">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'item' && (
              <Item data={itemEquipment?.filter((item) => item.item_equipment_page === 'Bag')} />
            )}

            {activeTab === 'avatar' && (
              <Avatar data={itemEquipment?.filter((item) => item.item_equipment_page === 'Cash')} />
            )}

            {activeTab === 'skill' && <Skill data={basic?.skill_awakening} />}
          </section>
        </div>
      </div>

      <KakaoAd2 position={'left'} />
      <KakaoAd3 position={'right'} />
    </>
  );
};

export default Character;
