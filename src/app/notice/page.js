import PostNotice from "@/components/Post/PostNotice";

export const metadata = {
  title: '공지사항 - 최신 업데이트 및 소식 - MHON.KR',
  description: 'MHON.KR의 최신 공지사항을 확인하고, 사이트에 대한 중요한 업데이트와 소식을 빠르게 알아보세요.',
};

export default function page({searchParams}) {
  const page = parseInt(searchParams.page || 1);

  return (
    <main className='relative w-full min-h-main bg-mainColor'>
      <PostNotice page={page} />
    </main>
  )
}