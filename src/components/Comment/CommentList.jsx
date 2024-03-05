import React from 'react'

const CommentList = () => {
  return (
    <div className='w-full mt-[40px] border-t-[3px] border-solid border-basicBlack'>
      <ul>
        <li className='py-[30px] px-[20px] font-bold border-b border-dotted border-basicGrey/60'>
          댓글
          <span className='ml-2 text-[#A88455]'>1</span>
        </li>
        <li className='py-[30px] px-[20px] border-b border-solid border-basicGrey/60'>
          <form>
            <div className='flex items-end bg-white relative'>
              <textarea name="" id="" cols="30" rows="10" className='w-full h-[100px] py-[20px] pr-[120px] pl-[30px] resize-none'></textarea>
              <button type='submit' className='btn-1 w-[98px] h-[44px] absolute right-[20px] bottom-[20px]'>등록</button>
            </div>
          </form>
        </li>
        <li className='py-[30px] px-[20px] text-[0.9rem] border-b border-solid border-basicGrey/60'>
          <div>
            <h5>
              <span className='gm'>GM</span>
              닉네임
            </h5>
            <span className='date text-basicGrey'>2024-03-05</span>
          </div>
          <div className='mt-[15px]'>
            <p>내용이 들어갑니다.</p>
          </div>
        </li>
        <li className='py-[30px] px-[20px] text-[0.9rem] border-b border-solid border-basicGrey/60'>
          <div>
            <h5>
              {/* <span className='gm'>GM</span> */}
              닉네임
            </h5>
            <span className='date text-basicGrey'>2024-03-05</span>
          </div>
          <div className='mt-[15px]'>
            <p>내용이 들어갑니다.</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CommentList