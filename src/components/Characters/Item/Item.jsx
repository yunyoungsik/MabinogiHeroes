import React, { useEffect, useMemo } from 'react';
import { useEnchantStore } from '@/store/useEnchantStore';

const Item = ({ data }) => {
  const { enchant, fetchEnchant } = useEnchantStore();

  useEffect(() => {
    const fetchEnchantsSequentially = async () => {
      if (!data) return;

      for (const item of data) {
        const prefixNo = item.item_option.prefix_enchant_use_preset_no;
        const suffixNo = item.item_option.suffix_enchant_use_preset_no;

        const prefixEnchant = item.item_option[`prefix_enchant_preset_${prefixNo}`];
        const suffixEnchant = item.item_option[`suffix_enchant_preset_${suffixNo}`];

        if (prefixEnchant) {
          await fetchEnchant({ type: 0, enchantName: prefixEnchant });
        }
        if (suffixEnchant) {
          await fetchEnchant({ type: 1, enchantName: suffixEnchant });
        }
      }
    };

    fetchEnchantsSequentially();
  }, [data, fetchEnchant]);

  const itemMapping = useMemo(
    () => ({
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
    }),
    []
  );

  const renderEnchant = (item_option) => {
    const prefixKey = `prefix_enchant_preset_${item_option.prefix_enchant_use_preset_no}`;
    const suffixKey = `suffix_enchant_preset_${item_option.suffix_enchant_use_preset_no}`;

    const prefixEnchant = item_option?.[prefixKey];
    const suffixEnchant = item_option?.[suffixKey];

    // 인챈트가 모두 없으면 아무것도 출력하지 않음
    if (!prefixEnchant && !suffixEnchant) return null;

    return (
      <ul className="flex items-center gap-1">
        {prefixEnchant && (
          <li className="relative group">
            {prefixEnchant}
            {renderEnchatStat(prefixEnchant, enchant)}
          </li>
        )}
        {suffixEnchant && (
          <li className="relative group">
            {suffixEnchant}
            {renderEnchatStat(suffixEnchant, enchant)}
          </li>
        )}
      </ul>
    );
  };

  const renderEnchatStat = (enchantName, enchant) => {
    const currentEnchant = enchant[enchantName];
    if (!currentEnchant) return null;

    return (
      <ul className="ballon group-hover:inline-block py-1 text-[0.75rem] text-white border-b border-solid border-customGrey500/30">
        <li>인챈트등급 {currentEnchant.enchant_grade}</li>
        {currentEnchant.enchant_stat.map((stat, index) => (
          <li key={index}>{stat}</li>
        ))}
      </ul>
    );
  };

  const renderStats = (stats) => (
    <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-customGrey500/30 last:border-b-0">
      <li className="font-bold text-customGrey500">연마</li>
      {stats.map((stat, index) => (
        <li key={index} className="flex items-center gap-1">
          <span>{stat.stat_name}</span>
          <span>+ {stat.stat_value}</span>
        </li>
      ))}
    </ul>
  );

  const renderAbility = (ability) => (
    <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-customGrey500/30 last:border-b-0">
      <li className="font-bold text-customGrey500">어빌리티</li>
      <li>{ability}</li>
    </ul>
  );

  const renderPowerInfusion = (item, presetNo) => {
    const presetKey = `power_infusion_preset_${presetNo}`;
    const preset = item?.item_option[presetKey];
    return (
      preset && (
        <ul className="py-1 text-[0.75rem] text-white border-b border-solid border-customGrey500/30 last:border-b-0">
          <li className="font-bold text-customGrey500">정령합성</li>
          <li className="flex items-center gap-1">
            <>
              <span>{preset?.stat_name || '-'}</span>
              <span>{preset?.stat_value || '-'}</span>
            </>
          </li>
        </ul>
      )
    );
  };

  const renderItem = (itemSlot) => {
    const foundItem = data.find((item) => item.item_equipment_slot_name === itemSlot);
    if (!foundItem) {
      return (
        <li
          key={itemSlot}
          className="w-full h-full px-5 py-2 border border-solid border-customGrey500/60 rounded-[5px] bg-customGrey900"
        >
          <div>
            <span className="text-[0.75rem] px-1 py-0.5 text-customGrey500 border border-solid border-customGrey500/60 rounded-[5px]">
              {itemMapping[itemSlot]}
            </span>
          </div>
        </li>
      );
    }

    const { item_option } = foundItem;
    const prefixNo = item_option.prefix_enchant_use_preset_no;
    const suffixNo = item_option.suffix_enchant_use_preset_no;

    const prefixEnchant = item_option[`prefix_enchant_preset_${prefixNo}`];
    const suffixEnchant = item_option[`suffix_enchant_preset_${suffixNo}`];

    return (
      <li
        key={itemSlot}
        className="w-full h-full px-5 py-2 border border-solid border-customGrey500/60 rounded-[5px] bg-customGrey900"
      >
        <div>
          <span className="text-[0.75rem] px-1 py-0.5 text-customGrey500 border border-solid border-customGrey500/60 rounded-[5px]">
            {itemMapping[itemSlot]}
          </span>
        </div>

        <div className="flex items-center gap-1 flex-wrap font-bold text-customOrange300/80 mb-1">
          {renderEnchant(item_option, prefixEnchant, suffixEnchant)}
          <p>{foundItem.item_name}</p>
        </div>

        {item_option.ability_name && renderAbility(item_option.ability_name)}
        {item_option.power_infusion_use_preset_no &&
          renderPowerInfusion(foundItem, item_option.power_infusion_use_preset_no)}
        {item_option.tuning_stat?.length > 0 && renderStats(item_option.tuning_stat)}
      </li>
    );
  };

  if (!data) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-main"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span
          className="animate-spin rounded-full h-8 w-8 border-t-2 border-customOrange300/80"
          aria-label="로딩 중"
        ></span>
      </div>
    );
  }

  const itemSlots = [
    'Earring',
    'Head',
    'Necklace',
    'Right Hand',
    'Upper',
    'Left Hand',
    'SubWeapon',
    'Lower',
    'Hand',
    'Belt',
    'Leg',
    'Charm',
    'Right Finger',
    'Artifact',
    'Left Finger',
    'Right Wrist',
    'Rhod',
    'Left Wrist',
  ];

  return (
    <section
      className="w-full px-3 pt-5 md:p-5 mb-2 bg-white border border-solid border-customGrey500/30 rounded-sm"
      aria-labelledby="item-section-title"
    >
      <h2 className="font-bold text-[1.2rem]">장비</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {itemSlots.map(renderItem)}
      </ul>
    </section>
  );
};

export default Item;
