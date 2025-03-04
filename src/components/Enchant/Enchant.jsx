import KakaoAd1 from '../AD/KakaoAd1';
import styles from './Enchant.module.scss';
import EnchantSection from './EnchantSection';

const Enchant = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <KakaoAd1 />
          <EnchantSection />
        </div>
      </div>
    </main>
  );
};

export default Enchant;
