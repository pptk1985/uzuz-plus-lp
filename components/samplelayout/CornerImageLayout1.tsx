import React from 'react';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';
import CornerImg from '@/public/images/uzuzplus/logo_uzuzplus.svg';

export default function CornerImageLayout1() {
  return (
    <div
      id="cornerimagelayout1"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18 relative"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      {/* 左上の角の画像 */}
      <div className="absolute top-8 left-2 w-20 h-20 sm:w-30 sm:h-30 -rotate-12 z-10">
        <img
          src={CornerImg.src}
          alt="Corner Image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* 右上の角の画像 */}
      <div className="absolute top-8 right-2 w-20 h-20 sm:w-30 sm:h-30 rotate-12 z-10">
        <img
          src={CornerImg.src}
          alt="Corner Image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* 左下の角の画像 */}
      <div className="absolute bottom-8 left-2 w-20 h-20 sm:w-30 sm:h-30 rotate-12 z-10">
        <img
          src={CornerImg.src}
          alt="Corner Image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* 右下の角の画像 */}
      <div className="absolute bottom-8 right-2 w-20 h-20 sm:w-30 sm:h-30 -rotate-12 z-10">
        <img
          src={CornerImg.src}
          alt="Corner Image"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-4 justify-center items-center w-full h-full">
          <div className="border h-full flex justify-center items-center">
            四隅に画像を配置
          </div>
        </div>
      </div>
    </div>
  );
}
