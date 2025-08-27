import React from 'react';
import { Tabs } from '../ui/animatedtabs';

import Img from '@/public/images/logo_600x600.png';
import Image from 'next/image';
import BgImg from '@/public/images/uzuzplus/mv02.webp';

export default function TabLayout1() {
  const tabs = [
    {
      title: 'タブ１',
      value: 'tab1',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl sm:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <Image
            src={Img.src}
            alt="UZUZのキャリアサポート"
            width={600}
            height={600}
            className="mx-auto h-auto object-contain border"
          />
        </div>
      ),
    },
    {
      title: 'タブ２',
      value: 'tab2',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl sm:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <Image
            src={Img.src}
            alt="UZUZのキャリアサポート"
            width={600}
            height={600}
            className="mx-auto h-auto object-contain border"
          />
        </div>
      ),
    },
    {
      title: 'タブ３',
      value: 'tab3',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl sm:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <Image
            src={Img.src}
            alt="UZUZのキャリアサポート"
            width={600}
            height={600}
            className="mx-auto h-auto object-contain border"
          />
        </div>
      ),
    },
  ];

  return (
    <div
      id="tablayout2"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-full max-w-5xl mx-auto">
        <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-2 sm:mb-4">
          タイトルタイトル
        </h2>
        <div className="h-4/5 [perspective:1000px] relative flex flex-col mx-auto w-full items-center justify-center">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
