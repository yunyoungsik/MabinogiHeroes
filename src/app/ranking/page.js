import RankingPage from "@/components/Ranking/RankingPage";

export const metadata = {
  title: '랭킹 - 마비노기영웅전 캐릭터 검색 MHON.VERCEL.APP',
  description: '마비노기 영웅전 실시간 랭킹과 명예의전당을 확인해보세요.',
};

export default function page() {
  return (
    <main className='relative w-full min-h-main'>
      <RankingPage />
    </main>
  )
}