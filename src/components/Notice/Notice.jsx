'use client';

import React, { useEffect } from 'react';
import NoticeItem from './NoticeItem';
import { useNoticeStore } from '@/store/useNoticeStore';
import EventItem from './EventItem';

const Notice = () => {
  const { loading, notice, patch, event, fetchNotice } = useNoticeStore();

  useEffect(() => {
    if (notice.length === 0 || patch.length === 0 || event.length === 0) {
      fetchNotice();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="sm:w-full md:max-w-[1280px] grid grid-cols-1 md:grid-cols-2 justify-between gap-2">
      <NoticeItem notice={notice} patch={patch} />
      <EventItem event={event} />
    </div>
  );
};

export default Notice;
