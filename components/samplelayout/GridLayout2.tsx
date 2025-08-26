import React from 'react';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';

export default function GridLayout2() {
  return (
    <div
      id="gridlayout2"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 justify-center items-center w-full h-full">
          <div className="col-span-2 border h-full flex justify-center items-center">
            01
          </div>
          <div className="border h-full flex justify-center items-center">
            02
          </div>
          <div className="border h-full flex justify-center items-center">
            03
          </div>
        </div>
      </div>
    </div>
  );
}
