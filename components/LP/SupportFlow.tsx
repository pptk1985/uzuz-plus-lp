import React from 'react';
import Image from 'next/image';

import BgImg from '@/public/images/uzuzplus/539641126_1200x800.png';
import CornerImg from '@/public/images/uzuzplus/logo_uzuzplus-w.svg';

export default function SupportFlow() {
  // サポートフローのステップ情報を配列で定義
  const supportSteps = [
    {
      step: 1,
      title: 'お申し込み',
      description: 'まずは、お気軽にお問い合わせください。',
    },
    {
      step: 2,
      title: '見学・相談',
      description: '専門スタッフが丁寧にサポートします。',
    },
    {
      step: 3,
      title: 'プログラム体験',
      description: '実際のサービスを体験し、雰囲気を知ることができます。',
    },
    {
      step: 4,
      title: '個別ヒアリング・支援計画作成',
      description:
        'あなたの体調や生活状況、目標・希望をお聞きし、最適な支援計画を立てます。',
    },
    {
      step: 5,
      title: 'トレーニング開始',
      description: '計画に沿って、必要なスキルを身につけます。',
    },
    {
      step: 6,
      title: '就職活動',
      description: '履歴書添削から面接対策まで、マンツーマンでサポートします。',
    },
    {
      step: 7,
      title: '就職後のフォロー',
      description: '働き始めてからも、安心して長く働けるようにサポートします。',
    },
  ];

  return (
    <div
      id="supportflow"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-blue-950 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18 relative"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      {/* 左上の角の画像 */}
      <div className="absolute top-8 left-2 w-26 h-26 sm:w-42 sm:h-42 -rotate-12 z-10">
        <Image
          src={CornerImg.src}
          alt="Corner Image"
          className="w-full h-full object-contain"
          width={200}
          height={200}
        />
      </div>

      <div className="flex justify-center items-center h-full max-w-5xl mx-4 sm:mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 justify-center items-center w-full h-full">
          <div className="col-span-2 h-full flex justify-center items-center">
            <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold drop-shadow">
              ご利用の流れ
            </h2>
          </div>
          {supportSteps.map((step, index) => (
            <div
              key={index}
              className="h-full flex flex-col justify-center items-center relative"
            >
              <div className="absolute top-3 left-2 z-10 bg-blue-500 w-7 sm:w-12 aspect-square rounded-full flex items-center justify-center font-bold text-lg sm:text-3xl font-dancing-script text-white shadow">
                {step.step}
              </div>
              <div className="bg-white/90 w-full max-w-24 sm:max-w-36 aspect-square rounded-full flex items-center justify-center font-yusei-magic text-sm sm:text-xl text-center p-1 sm:p-2 mb-1 sm:mb-2">
                {step.title}
              </div>
              <div className="text-[9px] sm:text-base font-normal sm:font-bold text-white">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
