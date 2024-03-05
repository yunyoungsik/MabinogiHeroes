import NoticeList from "@/components/Notice/NoticeList";

export default function page({searchParams}) {
  const page = parseInt(searchParams.page || 1);
  const {cate} = searchParams;
  // console.log(cate);

  return (
    <main className="'w-full min-h-main">
      <NoticeList cate={cate} page={page} />
    </main>
  )
}
