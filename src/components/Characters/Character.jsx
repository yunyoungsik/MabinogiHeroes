'use client';

import { useEffect, useState } from 'react';
// components
import KakaoAd1 from '../AD/KakaoAd1';
import KakaoAdSet from '../AD/KakaoAdSet';
import CharacterNavigation from './Navigation/CharacterNavigation';
import CharacterStat from './Stat/CharacterStat';
import Loading from '../ui/Loading';
// store
import { useUserStore } from '@/store/useUserStore';
// styles
import styles from './Character.module.scss';

const Character = ({ name }) => {
  const [cate, setCate] = useState('stat');
  const { loading, error, fetchUser } = useUserStore();

  // useEffect(() => {
  //   if (name) {
  //     fetchUser(name);
  //   }
  // }, [name, fetchUser]);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <KakaoAd1 />
          <div className={styles.content}>
            <CharacterNavigation cate={cate} setCate={setCate} />
            {cate === 'stat' && <CharacterStat />}
          </div>
        </div>
      </main>

      <KakaoAdSet />
    </>
  );
};

export default Character;
