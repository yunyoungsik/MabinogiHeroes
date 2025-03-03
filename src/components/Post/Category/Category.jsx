import Link from 'next/link';
import styles from '../Post.module.scss';

const Category = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button>공지사항</button>
        </li>
        <li>
          <button>본섭공지</button>
        </li>
        <li>
          <button>패치노트</button>
        </li>
        <li>
          <button>이벤트</button>
        </li>
      </ul>
    </nav>
  );
};

export default Category;
