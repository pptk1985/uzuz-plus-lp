import React from 'react';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';

export default function SampleFont() {
  return (
    <div
      id="samplefont"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center w-full h-full">
          <div className="border h-full">
            <span>デフォルト</span>
            <br />
            <span className="font-thin">シン</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-extrabold">エクストラボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-zen-maru">
            <span>ZenMaruGothic</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-zen-kaku">
            <span>ZenKakuGothicNew</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-mplus1p">
            <span>M PLUS 1P 多分適用されてるけど変</span>
            <br />
            <span className="font-thin">シン</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-extrabold">エクストラボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-mplus1code">
            <span>M PLUS 1CODE</span>
            <br />
            <span className="font-thin">シン</span>
            <br />
            <span className="font-extralight">エクストラライト</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-semibold">セミボールド</span>
            <br />
            <span className="font-bold">ボールド</span>
          </div>
          <div className="border h-full font-mplus-rounded1c">
            <span>M PLUS Rounded 1C 多分適用されてるけど変</span>
            <br />
            <span className="font-thin">シン</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-extrabold">エクストラボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-noto-sans-jp">
            <span>NotoSansJP</span>
            <br />
            <span className="font-thin">シン</span>
            <br />
            <span className="font-extralight">エクストラライト</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-semibold">セミボールド</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-extrabold">エクストラボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-noto-serif-jp">
            <span>NotoSerifJP</span>
            <br />
            <span className="font-extralight">エクストラライト</span>
            <br />
            <span className="font-light">ライト</span>
            <br />
            <span className="font-normal">レギュラー</span>
            <br />
            <span className="font-medium">ミディアム</span>
            <br />
            <span className="font-semibold">セミボールド</span>
            <br />
            <span className="font-bold">ボールド</span>
            <br />
            <span className="font-extrabold">エクストラボールド</span>
            <br />
            <span className="font-black">ブラック</span>
          </div>
          <div className="border h-full font-mochiy-pop-one">
            <span>MochiyPopOne</span>
            <br />
            <span className="font-normal">レギュラー</span>
          </div>
          <div className="border h-full font-yusei-magic">
            <span>Yusei Magic</span>
            <br />
            <span className="font-normal">レギュラー</span>
          </div>
          <div className="border h-full font-dancing-script">
            <span className="font-bold">DancingScript</span>
            <br />
            英語だけ
            <br />
            <span className="font-normal">Normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
