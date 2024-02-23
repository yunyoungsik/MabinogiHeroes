import Character from "@/components/Characters/Character";

export default function page({params}) {
  const {name} = params;

  return (
    <main className='w-full min-h-main'>
      <Character name={name} />
    </main>
  )
}