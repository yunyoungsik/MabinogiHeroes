import { RefreshCw } from 'lucide-react';
import React, { useState } from 'react';

const Item = ({ data }) => {
  const itemMapping = {
    'Right Hand': '무기',
    'Left Hand': '수호부',
    Head: '머리',
    Upper: '가슴',
    Lower: '다리',
    Hand: '손',
    Leg: '발',
    'Right Finger': '반지(오른손)',
    'Left Finger': '반지(왼손)',
    Earring: '귀걸이',
    Belt: '허리띠',
    Charm: '장신구',
    Artifact: '아티팩트',
    'Right Wrist': '팔찌(오른손)',
    'Left Wrist': '팔찌(왼손)',
    SubWeapon: '보조 무기',
    Necklace: '목걸이',
    Rhod: '로드',
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
          {foundItem?.item_option.enhancement_level && (
            <span>+{foundItem.item_option.enhancement_level}</span>
          )}

          {foundItem?.item_option.prefix_enchant_preset_1 && (
            <div className="flex items-center gap-1">
              <span>{foundItem?.item_option.prefix_enchant_preset_1}</span>
              <span>{foundItem?.item_option.suffix_enchant_preset_1}</span>
            </div>
          )}

          <p>{foundItem ? foundItem.item_name : defaultValue}</p>
        </div>

        {foundItem?.item_option.tuning_stat.length > 0 && (
          <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-basicGrey/30">
            <li className="font-bold text-basicGrey">연마</li>
            {foundItem?.item_option.tuning_stat.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <span>{item.stat_name}</span>
                <span>+ {item.stat_value}</span>
              </li>
            ))}
          </ul>
        )}

        {foundItem?.item_option.ability_name && (
          <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-basicGrey/30">
            <li className="font-bold text-basicGrey">어빌리티</li>
            <li>{foundItem?.item_option.ability_name}</li>
          </ul>
        )}

        {foundItem?.item_option.power_infusion_preset_1 && (
          <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-basicGrey/30 last:border-b-0">
            <li className="font-bold text-basicGrey">정령합성</li>
            <li className="flex items-center gap-1">
              <span>{foundItem?.item_option.power_infusion_preset_1?.stat_name || '-'}</span>
              <span>{foundItem?.item_option.power_infusion_preset_1?.stat_value || '-'}</span>
            </li>
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
      <h2 className="font-bold text-[1.2rem]">장비</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {renderItem('Earring')}
        {renderItem('Head')}
        {renderItem('Necklace')}
        {renderItem('Right Hand')}
        {renderItem('Upper')}
        {renderItem('Left Hand')}
        {renderItem('SubWeapon')}
        {renderItem('Lower')}
        {renderItem('Hand')}
        {renderItem('Belt')}
        {renderItem('Leg')}
        {renderItem('Charm')}
        {renderItem('Right Finger')}
        {renderItem('Artifact')}
        {renderItem('Left Finger')}
        {renderItem('Right Wrist')}
        {renderItem('Rhod')}
        {renderItem('Left Wrist')}
      </ul>
    </section>
  );
};

export default Item;
