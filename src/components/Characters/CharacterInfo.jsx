import React from 'react';
// utils
import convertTime from '@/utils/convertTime';
import timeAgo from '@/utils/timeAgo';

const CharacterInfo = ({ basic, guild, leftTitle, fixedTitle }) => {
  const InfoRow = ({ label, value }) => (
    <p className="text-[0.75rem] text-white font-bold">
      <span className="text-label">{label}</span>
      {value}
    </p>
  );

  return (
    <div className="w-full h-full p-2 bg-black/50">
      {(leftTitle || fixedTitle) && (
        <div className="flex">
          {leftTitle?.title_name !== '(Unknown)' && (
            <span className="font-bold text-[0.75rem] text-white mr-1">{leftTitle.title_name}</span>
          )}

          {fixedTitle?.title_name !== '(Unknown)' && (
            <span className="font-bold text-[0.75rem] text-white mr-1">
              {fixedTitle?.title_name}
            </span>
          )}
        </div>
      )}
      <h2 className="font-bold text-[1.5rem] text-white">{basic?.character_name}</h2>
      <div className="font-bold text-[0.75rem] text-white">[{basic?.cairde_name || '-'}]</div>

      <div className="absolute bottom-2 flex flex-col gap-4">
        <InfoRow label="레벨" value={basic?.character_level || 0} />
        <InfoRow label="캐릭터" value={basic?.character_class_name || '-'} />
        <InfoRow label="길드" value={guild?.guild_name || '-'} />
        <div className="flex flex-row items-center text-[0.75rem] text-white font-bold group">
          <span className="text-label">타이틀</span>
          <div className="relative">
            {basic?.total_title_count || '-'}

            {basic?.title_stat && (
              <div className="ballon group-hover:inline-block">
                {basic?.title_stat.map((stat, index) => (
                  <p key={index}>
                    <span>{stat.stat_name}</span>
                    <span>{stat.stat_value}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-[0.75rem] text-white font-bold">
          <span className="text-label">마지막접속</span>
          {basic?.character_date_last_login
            ? timeAgo(convertTime(basic.character_date_last_login))
            : '-'}
        </p>
      </div>
    </div>
  );
};

export default CharacterInfo;
