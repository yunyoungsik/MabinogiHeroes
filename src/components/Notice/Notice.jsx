'use client';

import React, { useEffect } from 'react';
// components
import NoticeItem from './NoticeItem';
import EventItem from './EventItem';
// store
import { useNoticeStore } from '@/store/useNoticeStore';

const Notice = () => {
  const { loading, notice, patch, event, fetchNotice } = useNoticeStore();

  useEffect(() => {
    if (notice.length === 0 || patch.length === 0 || event.length === 0) {
      fetchNotice();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main" role="status" aria-live="polite">
        <span className="loader" aria-label="로딩 중..."></span>
      </div>
    );
  }

  return (
    <section
      className="sm:w-full md:max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-2"
      aria-labelledby="notice-section"
    >
      <h2 id="notice-section" className="sr-only">
        공지사항 및 이벤트
      </h2>

      <NoticeItem notice={notice} patch={patch} />
      <EventItem event={event} />
    </section>
  );
};

export default Notice;
