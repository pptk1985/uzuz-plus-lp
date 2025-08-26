'use client';

import React from 'react';
import BgImg from '@/public/images/uzuzlp/1681223806_1200x675.png';
import Img1 from '@/public/images/flatimg/facetime-3-41-amber.png';
import Img2 from '@/public/images/flatimg/progress-14-amber300.png';
import Img3 from '@/public/images/flatimg/career-3-24-amber.png';
import Img4 from '@/public/images/flatimg/problem-solving-5-2-amber.png';
import Image from 'next/image';

const SupportFlowData = [
  {
    title: 'オンライン相談',
    image: Img1,
    description:
      'アドバイザーがあなたの話をじっくりヒアリングします。あなたの適正や希望を考慮し、マッチした求人をご紹介します。',
  },
  {
    title: 'オンラインサポート',
    image: Img2,
    description:
      '受かるノウハウを持つアドバイザーが書類添削や面接対策を丁寧にサポートします。採用選考などの面倒な調整もお任せください。',
  },
  {
    title: '内定・入社',
    image: Img3,
    description:
      '内定おめでとうございます！ここはゴールではなくスタートです。新たな未来に向けて頑張っていきましょう。',
  },
  {
    title: '入社後フォロー',
    image: Img4,
    description:
      '入社後、不安や悩みがあればキャリアアドバイザーに相談できます。場合によって企業との仲介役となり問題解決に努めることも可能です。',
  },
];

const SupportFlow: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <>
      <div
        id="flow"
        className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 mx-6 sm:mx-10 xl:mx-50">
            <h2 className="col-span-1 sm:col-span-2 mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
              キャリアサポートの流れ
            </h2>
            {SupportFlowData &&
              SupportFlowData.map((value, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3 pt-1 pb-2 sm:p-4 bg-white/75 shadow-md relative before:absolute before:-top-1.5 before:-left-1.5 before:w-7 before:h-7 before:bg-amber-300 before:rounded-full before:flex before:items-center before:justify-center before:text-white before:font-black before:text-xl before:pb-0.5 before:shadow before:z-10 before:content-[attr(data-number)]"
                  data-number={i + 1}
                >
                  <div className="grid grid-cols-[1fr_2fr] gap-0 sm:gap-2 justify-center items-center sm:items-center">
                    <div className="sm:col-span-2 flex justify-center">
                      <Image
                        src={value.image.src}
                        alt="image"
                        width={400}
                        height={400}
                        className="drop-shadow-lg w-3/5 sm:w-1/2 max-w-40 mx-auto"
                      />
                    </div>
                    <h3 className="sm:col-span-2 text-center font-bold font-zen-maru text-xl sm:text-2xl [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                      {value.title}
                    </h3>
                    <div className="col-span-2 text-xs sm:text-sm">
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportFlow;
