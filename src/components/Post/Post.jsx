import KakaoAd1 from '../AD/KakaoAd1';
import Category from './Category/Category';
import PostList from './List/PostList';
import styles from './Post.module.scss';

const Post = ({page}) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <KakaoAd1 />
          <div className={styles.content}>
            <Category />
            <PostList page={page} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;
