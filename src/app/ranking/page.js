import RankingPage from "@/components/Ranking/RankingPage";

export const metadata = {
  title: '랭킹 - 마비노기영웅전 캐릭터 검색 MHON.KR',
  description: '마비노기 영웅전 실시간 랭킹과 명예의 전당을 빠르게 확인하세요.',
};

export default function page() {
  return (
    <main className='relative w-full min-h-main bg-mainColor'>
      <RankingPage />
    </main>
  )
}