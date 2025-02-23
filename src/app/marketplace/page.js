import MarketplacePage from "@/components/Marketplace/MarketplacePage";

export const metadata = {
  title: '거래소 - 마비노기영웅전 캐릭터 검색 MHON.VERCEL.APP',
  description: '마비노기영웅전 최근 1주 아이템 거래 기록, 골드 구매, 골드 판매 정보를 확인해보세요.',
};

export default function page() {
  return (
    <main className='w-full min-h-main'>
      <MarketplacePage />
    </main>
  )
}