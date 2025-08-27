'use client';

import Image from 'next/image';
import BgImg from '@/public/images/uzuzlp/1370877203_1200x800.png';
import Img from '@/public/images/uzuzholdingsimg/s4_img1.png';
import CompanyImg2 from '@/public/images/careeremonimg/client/client02.png';
import CompanyImg3 from '@/public/images/careeremonimg/client/client03.png';
import CompanyImg4 from '@/public/images/careeremonimg/client/client04.png';
import CompanyImg6 from '@/public/images/careeremonimg/client/client06.png';
import CompanyImg7 from '@/public/images/careeremonimg/client/client07.png';
import CompanyImg9 from '@/public/images/careeremonimg/client/client09.png';
import CompanyImg10 from '@/public/images/careeremonimg/client/client10.png';
import CompanyImg11 from '@/public/images/careeremonimg/client/client11.png';
import CompanyImg12 from '@/public/images/careeremonimg/client/client12.png';
import CompanyImg13 from '@/public/images/careeremonimg/client/client13.png';

const CompanyData = [
  {
    img: CompanyImg12,
  },
  {
    img: CompanyImg2,
  },
  {
    img: CompanyImg3,
  },
  {
    img: CompanyImg4,
  },
  {
    img: CompanyImg11,
  },
  {
    img: CompanyImg6,
  },
  {
    img: CompanyImg7,
  },
  {
    img: CompanyImg13,
  },
  {
    img: CompanyImg9,
  },
  {
    img: CompanyImg10,
  },
];

const Companies: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="company"
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}

          {/* LeftSide */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
            採用企業の例｜あなたに一番マッチした求人をご紹介します！
          </h2>

          {/* RightSide */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={Img.src}
                alt="UZUZのキャリアサポート"
                width={600}
                height={600}
                className="w-3/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain max-h-40 sm:max-h-64 [filter:drop-shadow(6px_3px_0px_#fff)]"
              />
            </div>
          </div>

          {/* BottomSide */}
          <div className="sm:col-span-2">
            <div className="font-bold text-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
              {CompanyData &&
                CompanyData.map((value, i) => (
                  <div
                    className="p-0.5 sm:p-1.5 rounded bg-white/75 shadow"
                    key={i}
                  >
                    <Image
                      src={value.img.src}
                      alt="採用企業"
                      width={100}
                      height={50}
                      className="w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
