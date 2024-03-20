import Character from "@/components/Characters/Character";

export const metadata = {
  title: '마비노기 영웅전 캐릭터 검색 - 망전',
  description: '마비노기 영웅전 캐릭터를 검색할 수 있습니다.',
};

export default function page({params}) {
  const {name} = params;

  return (
    <main className='w-full min-h-main'>
      <Character name={name} />
    </main>
  )
}