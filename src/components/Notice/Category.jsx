import React from 'react';
import Link from 'next/link';

// const getData = async () => {
//   const res = await fetch(`http://localhost:3000/api/category`, {
//     cache: 'no-cache',
//   });
//   if (!res.ok) {
//     throw new Error("Error : category")
//   }
//   return res.json();
// };

export default async function Category({ cate }) {
  // const data = await getData();
  // console.log(data);
  // console.log(`cate : ${cate}`);

  return (
    <ul className="flex">
      <li className={cate === undefined ? 'on flex flex-1 w-full h-full font-bold text-basicGrey bg-black' : 'flex flex-1 w-full h-full font-bold text-basicGrey bg-black'}>
        <span className="block w-full">
          <Link href="/notice" className="flex w-full h-[50px] items-center justify-center">
            전체
          </Link>
        </span>
      </li>
      {/* {data.map((item) => (
        <li key={item.id} className="flex flex-1 w-full h-full font-bold text-basicGrey bg-black">
          <span className="block w-full">
            <Link href="/notice" className="flex w-full h-[50px] items-center justify-center">
              {item.cate}
            </Link>
          </span>
        </li>
      ))} */}
    </ul>
  );
}