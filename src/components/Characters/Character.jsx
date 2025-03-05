'use client';

import { useEffect, useState } from 'react';
// components
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAdSet from '../AD/KakaoAdSet';
import Loading from '../ui/Loading';
import CharacterNavigation from './Navigation/CharacterNavigation';
import CharacterStat from './Stat/CharacterStat';
import CharacterItem from './Item/CharacterItem';
import CharacterSkill from './Skill/CharacterSkill';
// store
import { useUserStore } from '@/store/useUserStore';
// styles
import styles from './Character.module.scss';
import CharacterAvatar from './Avatar/CharacterAvatar';

const Character = ({ name }) => {
  const [cate, setCate] = useState('stat');
  const { loading, error, fetchUser } = useUserStore();

  useEffect(() => {
    if (name) {
      fetchUser(name);
    }
  }, [name, fetchUser]);

  if (loading) {
    return (
      <main className={styles.main} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="flex flex-col items-center justify-center w-full min-h-main text-center bg-mainColor" role="alert">
          <h2 className="text-[2rem] font-bold text-customGrey900">MHON.KR</h2>
          <p className="text-[1.125rem]">해당하는 캐릭터의 검색 결과가 없습니다.</p>
          <span className="text-[0.75rem] text-customGrey600">캐릭터 명을 다시 한번 확인하시고 재시도 해주세요.</span>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <KakaoAd1 />
          <div className={styles.content}>
            <CharacterNavigation cate={cate} setCate={setCate} />
            {cate === 'stat' && <CharacterStat name={name} />}
            {cate === 'item' && <CharacterItem />}
            {cate === 'avatar' && <CharacterAvatar />}
            {cate === 'skill' && <CharacterSkill />}
          </div>
        </div>
      </main>

      <KakaoAdSet />
    </>
  );
};

export default Character;
