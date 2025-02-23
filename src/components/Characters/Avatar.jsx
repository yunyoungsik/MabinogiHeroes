import React from 'react';

const Avatar = ({ data }) => {
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
  const renderItem = (itemSlot, label, defaultValue = '-') => {
    const foundItem = data.find((item) => item.item_equipment_slot_name === itemSlot);
    return (
      <li
        className="w-full h-full px-5 py-2 border border-solid border-basicGrey/60 rounded-[5px] bg-darkBlue"
        key={itemSlot}
      >
        <div>
          <span className="text-[0.75rem] px-1 py-0.5 text-basicYellow border border-solid border-basicGrey/60 rounded-[5px]">
            {itemMapping[itemSlot]}
          </span>
        </div>

        <div className="flex items-center gap-1 flex-wrap font-bold text-basicOrange mb-1">
          <p>{foundItem ? foundItem.item_name : defaultValue}</p>
        </div>

        {foundItem?.item_option.cash_item_color && (
          <ul className="py-1 flex flex-col gap-1 text-[0.75rem] text-white">
            {Object.entries(foundItem.item_option.cash_item_color).map(([key, color], index) => (
              <li key={index} className="flex items-center gap-1">
                <span className='text-basicGrey'>{`색상파트${index + 1}`}</span>

                {/* 동적 배경색 적용 */}
                <span
                  className="w-4 h-4 rounded-full border border-basicGrey/30"
                  style={{ backgroundColor: `rgb(${color})` }}
                ></span>

                <span>{color}</span>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="w-full p-5 bg-white mb-2">
      <h2 className="font-bold text-[1.2rem]">아바타</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {renderItem('MakeUp')}
        {renderItem('Hair')}
        {renderItem('FacePainting')}

        {renderItem('Lens')}
        {renderItem('Badge')}
        {renderItem('Right Epaulet')}
        
        {renderItem('Body Shape')}
        {renderItem('Inner Armor')}
        {renderItem('BodyPainting')}




        {renderItem('Avatar_Weapon')}
        {renderItem('Avatar_Helm')}
        {renderItem('Avatar_Tail')}
        {renderItem('Avatar_Rear')}   
        {renderItem('Avatar_Tunic')}
        {renderItem('Avatar_Gloves')}
        {renderItem('Avatar_Pants')}
        {renderItem('Avatar_Boots')}
      </ul>
    </section>
  );
};

export default Avatar;
