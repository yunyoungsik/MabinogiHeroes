'use client';

import Loading from '@/components/ui/Loading';
import styles from './EnchantLayout.module.scss';

const EnchantLayout = ({ loading, data, enchantList }) => {
  if (loading || !data) {
    return <Loading />;
  }

  const renderEnchatStat = (item) => {
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

  return (
    <table className={styles.rankLayout}>
      <caption>인챈트 스크롤 거래소 거래 내역 및 시세</caption>

      <colgroup>
        <col width="10%" />
        <col width="10%" />
        <col width="10%" />
        <col />
        <col width="10%" />
        <col width="10%" />
        <col width="10%" />
      </colgroup>

      {/* 테이블 헤더 */}
      <thead>
        <tr>
          <th scope="col">랭크</th>
          <th scope="col">인챈트</th>
          <th scope="col">접두/접미</th>
          <th scope="col">부위</th>
          <th scope="col">평균가</th>
          <th scope="col">최고가</th>
          <th scope="col">최저가</th>
        </tr>
      </thead>

      {/* 테이블 본문 */}
      <tbody aria-live="polite">
        {enchantList.map((item, index) => {
          // data에서 해당 enchantName에 맞는 항목 찾기
          const matchedData = data.find((d) => {
            return (
              d.item_option?.suffix_enchant_preset_1 === item.name ||
              d.item_option?.prefix_enchant_preset_1 === item.name
            );
          });

          return (
            <tr key={`${item.rank}-${item.name}-${index}`}>
              {/* 랭크 */}
              <td className={styles.ranking}>{item.rank}</td>

              {/* 인챈트 */}
              <td className={styles.name}>
                {item.name}
                <div className={styles.enchantStat}>
                  <span>{item.name}</span>
                  <ul>
                    {item.stat.map((stat, index) => (
                      <li key={index}>{stat}</li>
                    ))}
                  </ul>
                </div>
              </td>

              {/* 접미/접두 */}
              <td className={styles.option}>{item.preset}</td>

              {/* 부위 */}
              <td className={styles.option}>{item.slot.join(', ')}</td>

              {/* 평균가 */}
              <td className={styles.score}>{matchedData?.average_price.toLocaleString() || '-'}</td>

              {/* 최고가 */}
              <td className={styles.score}>{matchedData?.max_price.toLocaleString() || '-'}</td>

              {/* 최저가 */}
              <td className={styles.score}>{matchedData?.min_price.toLocaleString() || '-'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EnchantLayout;
