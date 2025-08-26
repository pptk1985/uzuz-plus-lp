'use client';

import React from 'react';
import Image from 'next/image';
import Img from '@/public/images/careeremonimg/2436455361_600x600.png';
import RegistrationForm from '@/components/RegistrationForm';

import {
  BadgeJapaneseYen,
  Building2,
  Globe,
  Handshake,
  UserRoundCheck,
} from 'lucide-react';

// Lucideアイコンのマッピング
const iconMap: { [key: string]: React.JSX.Element } = {
  yen: <BadgeJapaneseYen className="w-3 h-3 sm:w-4 sm:h-4" />,
  globe: <Globe className="w-3 h-3 sm:w-4 sm:h-4" />,
  handshake: <Handshake className="w-3 h-3 sm:w-4 sm:h-4" />,
  user: <UserRoundCheck className="w-3 h-3 sm:w-4 sm:h-4" />,
  building: <Building2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />,
};

const funFactsData = [
  {
    iconName: 'yen',
    title: '料金',
    number: '0円/完全無料',
  },
  {
    iconName: 'globe',
    title: 'オンラインで',
    number: '完結',
  },
  {
    iconName: 'handshake',
    title: '支援実績',
    number: '6.3万人',
  },
  {
    iconName: 'user',
    title: '入社後定着率',
    number: '96%',
  },
  {
    iconName: 'building',
    title: '登録企業数',
    number: '3000社',
  },
];

const RegistrationFormCta: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="registration"
      className="h-dvh w-full bg-cover bg-center bg-amber-300 bg-1"
    >
      <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}
          <div className="sm:col-span-2">
            <h2 className="text-center text-amber-300 text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-md [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_3px_2px_0_#000]">
              ご利用の登録はコチラから
            </h2>
          </div>
          {/* LeftSide */}
          <div className="hidden sm:flex justify-center items-center">
            <div className="animate-banner-image w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={Img.src}
                alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                width={600}
                height={600}
                className="w-3/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* RightSide */}
          <div className="">
            <RegistrationForm />
            {/* <div className="absolute -top-4 -left-4 flex flex-col gap-1 z-10">
              <div className="text-sm sm:text-base font-bold font-zen-maru text-white bg-rose-400 py-1 px-3 rounded shadow-md -rotate-2">
                簡単！30秒で登録完了
              </div>
            </div> */}
          </div>

          {/* BottomSide */}
          <div className="sm:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-center">
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <div
                    className="p-1.5 sm:p-3 bg-white rounded-lg flex flex-col justify-center items-center gap-0.5 sm:gap-1"
                    key={i}
                  >
                    <div className="font-zen-maru text-xs sm:text-base leading-tight text-center">
                      {value.title}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="bg-white rounded-full p-0.5 sm:p-1 text-amber-300 shadow border border-amber-300">
                        {iconMap[value.iconName]}
                      </div>
                      <div className="text-xs sm:text-xl leading-tight">
                        {value.number}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormCta;
