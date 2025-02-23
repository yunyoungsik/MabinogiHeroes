import React from 'react'
import RankingItem from './RankingItem'

const Ranking = () => {
  return (
    <div className='w-full md:w-[1280px] flex flex-col md:flex-row items-center justify-between gap-2'>
      <RankingItem type={0} localPage={1} />
      <RankingItem type={1} localPage={1} />
    </div>
  )
}

export default Ranking