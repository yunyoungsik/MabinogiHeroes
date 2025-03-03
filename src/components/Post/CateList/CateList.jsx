'use client';

import { useEffect, useMemo } from 'react';
import timeAgo from '@/utils/timeAgo';
import convertTime from '@/utils/convertTime';
import styles from './CateList.module.scss';
import Loading from '@/components/ui/Loading';
import { useNoticeStore } from '@/store/useNoticeStore';

const CateList = ({ cate }) => {
  const { loading, notice, patch, event, fetchNotice } = useNoticeStore();

  // 마영전 공지
  useEffect(() => {
    if (notice.length === 0 || patch.length === 0 || event.length === 0) {
      fetchNotice();
    }
  }, [fetchNotice, notice.length, patch.length, event.length]);

  const data = useMemo(() => {
    switch (cate) {
      case 'notice':
        return notice;
      case 'patch':
        return patch;
      case 'event':
        return event;
      default:
        return [];
    }
  }, [cate, notice, patch, event]);

  console.log(patch);

  if (loading || notice.length === 0 || patch.length === 0 || event.length === 0) {
    return <Loading />;
  }

  return (
    <div className={styles.list}>
      <ul>
        {data?.map((post) => (
          <li key={post.url}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <h2>{post.title}</h2>

              <div className={styles.info}>
                {cate === 'event' ? (
                  <>
                    <p>
                      {post.date_event_start && (
                        <span>{convertTime(post.date_event_start).split(' ')[0]}</span>
                      )}

                      {post.date_event_start && post.date_event_end && <span>~</span>}

                      {post.date_event_end && (
                        <span>{convertTime(post.date_event_end).split(' ')[0]}</span>
                      )}
                    </p>
                  </>
                ) : (
                  <p>{timeAgo(convertTime(post.date))}</p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CateList;
