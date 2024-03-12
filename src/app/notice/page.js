import NoticeList from "@/components/Notice/NoticeList";

export default function page({searchParams}) {
  const page = parseInt(searchParams.page || 1);

  return (
    <main className="'w-full min-h-main">
      <NoticeList page={page} />
    </main>
  )
}
