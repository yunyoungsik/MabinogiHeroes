import MarketplacePage from "@/components/Marketplace/MarketplacePage";

export const metadata = {
  title: '거래소 - 마비노기영웅전 캐릭터 검색 MHON.KR',
  description: '마비노기 영웅전 거래소에서 아이템의 최신 시세와 거래 정보를 빠르게 확인하세요.',
};

export default function page() {
  return (
    <main className='relative w-full min-h-main bg-mainColor'>
      <MarketplacePage />
    </main>
  )
}