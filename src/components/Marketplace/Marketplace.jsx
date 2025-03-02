'use client';

import MarketplaceSection from './MarketplaceSection';
import styles from './Marketplace.module.scss';
import KakaoAdSet from '../AD/KakaoAdSet';

const Marketplace = () => {
  return (
    <>
      <main className={styles.main}>
        <MarketplaceSection />
      </main>

      <KakaoAdSet />
    </>
  );
};

export default Marketplace;
