'use client';

import React, { useState } from 'react';
import { PenLine } from 'lucide-react';
import styles from './ProfileDropdown.module.scss';
import TextButton from '@/components/ui/Button/TextButton';
import LineButton from '@/components/ui/Button/LineButton';
import IconButton from '@/components/ui/Button/IconButton';

const ProfileDropdown = ({
  authUser,
  editName,
  setEditName,
  handleLogout,
  handleDelete,
  handleModify,
}) => {
  const [toggleName, setToggleName] = useState(false);

  return (
    <div className={styles.profileDropdown}>
      <div className={styles.profile}>
        <div className={styles.name}>
          {!toggleName ? (
            <>
              <h2 className={styles.username}>{authUser?.username || 'Unknown'}</h2>
              <IconButton handler={() => setToggleName(!toggleName)}>
                <PenLine size={16} stroke="#8b95a1" />
              </IconButton>
            </>
          ) : (
            <div className={styles.editBox}>
              <input
                value={editName}
                placeholder="닉네임(2~10글자)"
                minLength={2}
                maxLength={10}
                onChange={(e) => setEditName(e.target.value)}
              />

              <div className={styles.button}>
                <LineButton text="취소" handler={() => setToggleName(false)} />
                <LineButton text="변경" handler={handleModify} />
              </div>
            </div>
          )}
        </div>
        <div className={styles.email}>
          <p>{authUser?.email}</p>
          <TextButton active={false} text="회원탈퇴" handler={handleDelete} />
        </div>
      </div>

      <div className={styles.button}>
        <LineButton text="로그아웃" handler={handleLogout} />
      </div>
    </div>
  );
};

export default ProfileDropdown;
