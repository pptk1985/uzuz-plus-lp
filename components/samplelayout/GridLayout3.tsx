import React from 'react';
import { WobbleCard } from '../ui/wobble-card';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';

export default function GridLayout3() {
  return (
    <div
      id="gridlayout3"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-full">
        <WobbleCard
          containerClassName="col-span-1 sm:col-span-2 h-full bg-pink-800"
          className=""
        >
          <div className="text-neutral-200">01 ※背景画像最適化まだ</div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1">
          <div className="text-neutral-200">02</div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-3 bg-blue-900">
          <div className="text-neutral-200">03</div>
        </WobbleCard>
      </div>
    </div>
  );
}
