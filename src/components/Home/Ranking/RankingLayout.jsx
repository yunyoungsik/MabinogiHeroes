import Link from 'next/link';
import TextButton from '@/components/ui/Button/TextButton';
import Loading from '@/components/ui/Loading';
import styles from './Ranking.module.scss';

const RankingLayout = ({ loading, label, standard, type, setType, data }) => {
  return (
    <section key={label}>
      <div className={styles.title}>
        <h3>{label}</h3>
        <span>{standard}</span>
      </div>
      <nav className={styles.nav}>
        <div className={styles.type}>
          {['공격력', '마법공격력'].map((label, typeIndex) => (
            <TextButton
              key={label}
              active={type === typeIndex}
              text={label}
              handler={() => setType(typeIndex)}
            />
          ))}
        </div>
      </nav>

      {!data || data.length === 0 || loading ? (
        <div className={styles.loadingBox}>{true && <Loading />}</div>
      ) : (
        <ul className={styles.list}>
          {data?.map((item) => (
            <li key={item.ranking}>
              <strong>{item.ranking}</strong>
              <Link href={`/user/${item.character_name}`}>{item.character_name}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RankingLayout;
