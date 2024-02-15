import Character from "@/components/Characters/Character";

export default function page({params}) {
  const {name} = params;

  return (
    <main className='w-full h-[100vh]'>
      <Character name={name} />
    </main>
  )
}