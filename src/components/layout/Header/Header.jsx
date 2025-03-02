'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// components
import Nav from './Nav';
import Search from '../../ui/Input/Search';
import UserProfile from './UserProfile';
import styles from './Header.module.scss';

const Header = () => {
  const pathName = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link href="/" aria-label="홈으로 이동">
              <h1 className={styles.logo}>ON.KR</h1>
            </Link>
            <Nav />
          </div>
          <div className={styles.search}>
            <Search />
          </div>

          <UserProfile />
        </div>
      </header>

      <div className={styles.mobileSearch}>
        <Search />
      </div>
    </>
  );
};

export default Header;
