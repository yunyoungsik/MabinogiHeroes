import React from 'react';

const Item = ({ data }) => {
  const itemMapping = {
    'Right Hand': '무기',
    'Left Hand': '수호부',
    Head: '머리',
    Upper: '가슴',
    Lower: '다리',
    Hand: '손',
    Leg: '발',
    'Right Finger': '반지',
    'Left Finger': '반지',
    Earring: '귀걸이',
    Belt: '허리띠',
    Charm: '장신구',
    Artifact: '아티팩트',
    'Right Wrist': '팔찌',
    'Left Wrist': '팔찌',
    SubWeapon: '보조 무기',

    Hair: '헤어(아바타)',
    Avatar_Helm: '머리(아바타)',
    Avatar_Tunic: '가슴(아바타)',
    Avatar_Pants: '다리(아바타)',
    Avatar_Gloves: '손(아바타)',
    Avatar_Boots: '발(아바타)',
    Avatar_Rear: '등(아바타)',
    Avatar_Tail: '꼬리(아바타)',
    Avatar_Weapon: '무기(아바타)',
    MakeUp: '메이크업',
    FacePainting: '페이스페인팅',
    BodyPainting: '바디페인팅',
    'Inner Armor': '이너아머',
    'Body Shape': '체형',
  };

  const renderItem = (itemSlot, label, defaultValue = '-') => {
    const foundItem = data.itemEquipment?.item_equipment.find((item) => item.item_equipment_slot_name === itemSlot);
    return (
      <li className="w-full sm:w-[100%] md:w-[49%] lg:w-[33%] px-5 py-2 mb-2 border border-solid border-basicGrey/60 rounded-[5px] bg-darkBlue" key={itemSlot}>
        <p className={`font-bold text-white mb-1 ${foundItem ? '' : 'italic'}`}>{foundItem ? foundItem.item_name : defaultValue}</p>
        <span className="inline-block text-[0.9rem] px-1 py-0.5 text-basicYellow border border-solid border-basicGrey/60 rounded-[5px]">{itemMapping[itemSlot]}</span>
      </li>
    );
  };

  return (
    <>
      <section className="w-full p-5 bg-white mb-2">
        <h2 className="font-bold text-[1.2rem]">장비</h2>
        <ul className="flex flex-wrap items-center justify-between">
          {renderItem('Right Hand')}
          {renderItem('Left Hand')}
          {renderItem('Head')}
          {renderItem('Upper')}
          {renderItem('Lower')}
          {renderItem('Hand')}
          {renderItem('Leg')}
          {renderItem('Right Finger')}
          {renderItem('Left Finger')}
          {renderItem('Earring')}
          {renderItem('Belt')}
          {renderItem('Charm')}
          {renderItem('Artifact')}
          {renderItem('Right Wrist')}
          {renderItem('Left Wrist')}
          {renderItem('SubWeapon')}
        </ul>
      </section>
      <section className="w-full p-5 bg-white mb-2">
        <h2 className="font-bold text-[1.2rem]">아바타</h2>
        <ul className="flex flex-wrap items-center justify-between">
          {renderItem('Hair')}
          {renderItem('Avatar_Helm')}
          {renderItem('Avatar_Tunic')}
          {renderItem('Avatar_Pants')}
          {renderItem('Avatar_Gloves')}
          {renderItem('Avatar_Boots')}
          {renderItem('Avatar_Rear')}
          {renderItem('Avatar_Tail')}
          {renderItem('Avatar_Weapon')}
          {renderItem('MakeUp')}
          {renderItem('FacePainting')}
          {renderItem('BodyPainting')}
          {renderItem('Inner Armor')}
        </ul>
      </section>
    </>
  );
};

export default Item;
