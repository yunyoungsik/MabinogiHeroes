'use client'

import React, { useEffect, useState } from 'react'

const Character = ({ name }) => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/characterData?name=${encodeURIComponent(name)}`);
        const data = await res.json();
        // console.log(data)
        setData(data);
      } catch (error) {
        console.error("API 요청 중 에러가 발생했습니다: ", error);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    let card = document.querySelector('.card')

    card.addEventListener('mousemove', function (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      // console.log(x, y);

      let rotateY = -1 / 10 * x + 20;
      let rotateX = 4 / 60 * y - 20;

      card.style.transform = `perspective(440px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    })
  }, [])

  return (
    <div className='w-full h-full flex justify-center items-center'>

      <div className='overlay'>
        <div className='card w-[316px] h-[440px] transition-all rounded-xl bg-piona'>
          <div className='w-full h-full bg-black/60 rounded-xl p-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center text-[1.1rem] text-white font-bold'>
                <span className='text-[0.7rem] bg-gray-400 rounded-2xl py-1 px-2 mr-1'>{data.basic?.character_class_name}</span>{data.basic?.character_name}
              </div>
              <div className='text-[1.1rem] text-white font-bold'>
                <span className='text-[0.7rem]'>Lv</span>{data.basic?.character_level}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Character