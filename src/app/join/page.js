import React from 'react'

export default function page() {
  return (
    <main className="'w-full min-h-main">
      <section>
        <h3>회원가입을 하시겠습니까?</h3>
        <form>
          <fieldset>
            <legend>회원가입</legend>
            <div>
              <label htmlFor='youId'>아이디</label>
              <input type='text' name='youId' id='youId' placeholder='email@email.com' required/>
            </div>

            <div>
              <label htmlFor='youPass'>비밀번호</label>
              <input type='password' name='youPass' id='youPass' autoComplete='off' placeholder='비밀번호' required/>
            </div>

            <div>
              <label htmlFor='youName'>닉네임</label>
              <input type='text' name='youName' id='youName' placeholder='닉네임' required />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <input type='checkbox' name='check' id='check' />
              <label htmlFor='check'>이용약관과 개인정보 수집 및 이용에 동의합니다.</label>
            </div>
          </fieldset>
          <button type='submit'>회원가입</button>
        </form>
      </section>
    </main>
  )
}
