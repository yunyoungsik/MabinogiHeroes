import React from 'react';
import Image from 'next/image';
// components
import Search from '../Header/Search';
import HallOfHonor from '../Ranking/HallOfHonor';
import Ranking from '../Ranking/Ranking';
import Notice from '../Notice/Notice';
import CoupangAd1 from '../AD/CoupangAd1';

const MainPage = () => {
  return (
    <>
      <div className="w-full min-h-[90vh] flex items-center justify-center bg-mainColor sm:rounded-none md:rounded-b-[5%]">
        <div className="max-w-[1280px] w-full h-full m-auto flex flex-col gap-2">
          <div className="w-full flex flex-col items-center justify-center">
            <Image src={'/favicon.svg'} width={100} height={100} alt="로고" />
            <h2 className="text-[1.5rem] md:text-[3rem] font-bold text-center">
              마비노기영웅전
              <br />
              캐릭터 검색
            </h2>
            <div className="max-w-[700px] w-full h-[60px] p-4 mt-4 text-white bg-customGrey900 rounded-[60px]">
              <Search />
            </div>
            {/* 광고 */}
            <div className="max-w-[1080px] w-full h-[100px] mt-4 m-auto bg-customGrey900/30">
              {/* <CoupangAd1 /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 className="text-[1.5rem] font-bold text-center">공지사항</h2>
          </div>
          <Notice />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 className="text-[1.5rem] font-bold text-center">명예의전당</h2>
            <p className="px-[24px] md:px-0 text-center">
              명예의 전당 랭킹은 매일 오전 9시 실시간 랭킹 순위를 기준으로 반영됩니다.
            </p>
          </div>
          <HallOfHonor />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[1280px] py-10">
          <div className="w-full flex py-4 flex-col items-center justify-center">
            <h2 className="text-[1.5rem] font-bold">실시간랭킹</h2>
            <p className="px-[24px] md:px-0 text-center">
              실시간 랭킹 정보는 1시간마다 반영됩니다.
            </p>
          </div>
          <Ranking />
        </div>
      </div>
    </>
  );
};

export default MainPage;
