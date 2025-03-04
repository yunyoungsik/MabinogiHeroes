import { useUserStore } from '@/store/useUserStore';
import styles from './UserInfo.module.scss';

// 캐릭터 백그라운드 이미지
const CLASS_BACKGROUND_MAP = {
  네반: 'bg-neamhain',
  사냐: 'bg-sanyaa',
  소우: 'bg-sou',
  아켈: 'bg-achel',
  체른: 'bg-czern',
  라티야: 'bg-latiya',
  레티: 'bg-letty',
  단아: 'bg-danah',
  테사: 'bg-tessa',
  카엘: 'bg-kael',
  레서: 'bg-lethor',
  벨: 'bg-bel',
  미울: 'bg-miul',
  그림덴: 'bg-grimden',
  미리: 'bg-miri',
  델리아: 'bg-delia',
  헤기: 'bg-hagie',
  아리샤: 'bg-arisha',
  린: 'bg-lynn',
  허크: 'bg-hurk',
  벨라: 'bg-vella',
  카이: 'bg-kay',
  카록: 'bg-kalok',
  이비: 'bg-evy',
  피오나: 'bg-fiona',
  리시타: 'bg-lethita',
};

const UserInfo = () => {
  const { basic, guild, titleEquipment, fetchUser } = useUserStore();
  // 캐릭터 배경 이미지 반환
  // const getCharacterBackground = (className) => CLASS_BACKGROUND_MAP[className] || '';

  // 타이틀 추출
  // const leftTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '좌측');
  // const fixedTitle = titleEquipment?.find((item) => item.title_equipment_type_name === '고정');

  return (
    <div className={styles.userInfo}>
      <div className={styles.textBox}>
        <div>
          <span>Lv.</span>
          <span>타이틀</span>
        </div>
        <h2>이름</h2>
      </div>
    </div>
  );
};

export default UserInfo;
