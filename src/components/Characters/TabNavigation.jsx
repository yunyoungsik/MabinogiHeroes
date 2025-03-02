import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'item', label: '장비' },
    { id: 'avatar', label: '아바타' },
    { id: 'skill', label: '스킬' },
  ];

  return (
  <fieldset className="p-3 md:p-5 my-2 md:mt-0 md:mb-2 flex flex-row items-center gap-4 bg-white border border-solid border-customGrey500/30 rounded-sm text-sm" aria-label="탭 내비게이션">
      <legend className="sr-only">장비, 아바타, 스킬 선택</legend>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          aria-pressed={activeTab === tab.id}
          className={`py-1 px-4 border border-solid border-customGrey500 rounded-2xl transition-colors ${
            activeTab === tab.id ? 'text-white bg-customGrey900' : 'hover:bg-customGrey100'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </fieldset>
  );
};

export default TabNavigation;
