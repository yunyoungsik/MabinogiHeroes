import Character from "@/components/Characters/Character";

export async function generateMetadata({ params }) {
  const name = params.name;

  return {
    title: `${decodeURIComponent(name)} - 캐릭터 정보 - 마비노기영웅전 캐릭터 검색 MHON.KR`,
    description: `마비노기영웅전 캐릭터를 검색해서 능력치와 장비, 스킬 등 다양한 정보를 확인하세요.`,
  };
}

export default function page({params}) {
  const {name} = params;

  return (
    <main className='relative w-full min-h-main bg-mainColor'>
      <Character name={name} />
    </main>
  )
}