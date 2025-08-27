import React from 'react';

import BgImg from '@/public/images/uzuzplus/future.webp';

export default function SupportFlow() {
  return (
    <div
      id="supportflow"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-blue-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center w-full h-full">
          <div className="col-span-2 border h-full flex justify-center items-center">
            ご利用の流れ
          </div>
          <div className="border h-full flex justify-center items-center">
            Step01 お申し込み
          </div>
          <div className="border h-full flex justify-center items-center">
            Step02 見学・相談
          </div>
          <div className="border h-full flex justify-center items-center">
            Step03 プログラム体験
          </div>
          <div className="border h-full flex justify-center items-center">
            Step04 個別ヒアリング・支援計画作成
          </div>
          <div className="border h-full flex justify-center items-center">
            Step05 トレーニング開始
          </div>
          <div className="border h-full flex justify-center items-center">
            Step06 就職活動
          </div>
          <div className="border h-full flex justify-center items-center">
            Step07 就職後のフォロー
          </div>
        </div>
      </div>
    </div>
  );
}
