import { useUserStore } from '@/store/useUserStore';
import React from 'react';

const itemMapping = {
  Hair: '헤어(아바타)',
  MakeUp: '메이크업',
  Lens: '렌즈',
  Avatar_Helm: '머리(아바타)',
  Avatar_Tunic: '가슴(아바타)',
  Avatar_Pants: '다리(아바타)',
  Avatar_Gloves: '손(아바타)',
  Avatar_Boots: '발(아바타)',
  Avatar_Rear: '등(아바타)',
  Avatar_Tail: '꼬리(아바타)',
  Avatar_Weapon: '무기(아바타)',
  FacePainting: '페이스페인팅',
  BodyPainting: '바디페인팅',
  'Inner Armor': '이너아머',
  'Body Shape': '체형',
  Badge: '배지',
  'Right Epaulet': '견장',
};

const itemSlots = [
  'MakeUp',
  'Hair',
  'FacePainting',
  'Lens',
  'Badge',
  'Right Epaulet',
  'Body Shape',
  'Inner Armor',
  'BodyPainting',
  'Avatar_Weapon',
  'Avatar_Helm',
  'Avatar_Tail',
  'Avatar_Rear',
  'Avatar_Tunic',
  'Avatar_Gloves',
  'Avatar_Pants',
  'Avatar_Boots',
];

const CharacterAvatar = () => {
  const { itemEquipment } = useUserStore();
  const data = itemEquipment?.filter((item) => item.item_equipment_page === 'Cash') || [];
  
  // 아바타 항목
  const renderItem = (itemSlot) => {
    const foundItem = data.find((item) => item.item_equipment_slot_name === itemSlot);

    if (!itemMapping[itemSlot]) return null;

    return (
      <li
        className="w-full h-full px-5 py-2 border border-solid border-customGrey500/50 rounded-[5px] bg-customGrey900"
        key={itemSlot}
      >
        <div>
          <span className="text-[0.75rem] px-1 py-0.5 text-customGrey500 border border-solid border-customGrey500/30 rounded-[5px]">
            {itemMapping[itemSlot]}
          </span>
        </div>

        {foundItem && (
          <div className="flex items-center gap-1 flex-wrap font-bold text-customOrange300/80 mb-1">
            <p> {foundItem.item_name}</p>
          </div>
        )}

        {foundItem?.item_option?.cash_item_color &&
          renderColors(foundItem.item_option.cash_item_color)}
      </li>
    );
  };

  // 색상
  const renderColors = (colors) => (
    <ul className="py-1 flex flex-col gap-1 text-[0.75rem] text-white">
      {Object.entries(colors).map(([key, color]) => (
        <li key={key} className="flex items-center gap-1">
          <span className="text-customGrey500">{`색상파트 ${key.split('_')[1]}`}</span>
          <span
            className="w-4 h-4 rounded-full border border-customGrey500/30"
            style={{ backgroundColor: `rgb(${color})` }}
            aria-label={`색상: ${color}`}
          ></span>
          <span>{color}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="w-full px-3 pt-5 md:p-5 mb-2 bg-white border border-solid border-customGrey500/30 rounded-sm">
      <h2 className="font-bold text-[1.2rem]">아바타</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {itemSlots.map((slot) => renderItem(slot))}
      </ul>
    </section>
  );
};

export default CharacterAvatar;
