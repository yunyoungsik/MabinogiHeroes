# 마비노기 영웅전 API
<img style="width: 100%;" src="https://github.com/yunyoungsik/MabinogiHeroes/blob/main/public/image/meta/mangjeun.jpg?raw=true" alt="mangjeun" />
Next.js와 Nexon Open API를 사용하여 만든 마비노기영웅전 검색 사이트입니다.
마비노기영웅전 이용자를 위한 캐릭터 정보 검색 사이트입니다.

## 설치
<details>
<summary>Install</summary>
npm install axios<br/>
npm install swiper<br />
npm install lucide-react<br />
npm install axios<br />
npm install zustand
npm i @next/third-parties
npm i recharts
</details>

## 기능소개
유저 정보 검색

      1. Character 컴포넌트는 name을 prop으로 받아옵니다.
      2. useState 훅을 사용하여 data 상태를 초기화합니다. 이 상태는 캐릭터 정보를 저장합니다.
      3. useEffect 훅을 사용하여 컴포넌트가 마운트될 때와 name prop이 변경될 때마다 데이터를 가져옵니다.
      4. fetchData 함수를 통해 API를 호출하여 캐릭터 정보를 가져옵니다.
      5. bgCharacter 함수는 캐릭터 클래스 이름을 받아서 해당 클래스에 맞는 배경 클래스를 반환합니다.
      6. 데이터가 없을 경우 로딩 스피너를 보여줍니다.
      7. 데이터가 있을 경우, 캐릭터 정보와 아이템, 타이틀 정보를 표시합니다.
