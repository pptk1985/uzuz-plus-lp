'use client';
import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from '../ui/layout-grid';
import { MousePointerClick } from 'lucide-react';

import BgImg from '@/public/images/uzuzlp/2288443741_1200x800.png';

export default function Reason() {
  return (
    <div
      id="reason"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-600 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold">
        UZUZ Plus+が選ばれる５つの理由
      </h2>
      <div className="flex justify-center items-start h-full max-w-6xl mx-auto">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ① IT分野に強い実践型カリキュラム
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">
        プログラミングやWebデザイン、AI分野の講座まで豊富な学習コンテンツを用意。加えて、ソーシャルスキルが学べるカリキュラムなども幅広く提供しています。教材は今後も増え続けるので、学びの選択肢が広がります。
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ② 種類豊富なオンライン学習コンテンツ
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">
        通勤・通所が難しい日でも、自宅で自分のペースで学習を進められるオンラインコンテンツを多数用意。5,000名以上をIT業界へ輩出した“実践型カリキュラム”を採用。基礎から現場で役立つスキルまで着実に身につけられます。
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ③ 累計サポート８万件超！キャリア支援ノウハウ
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">
        2012年創業以来、就職・転職支援ノウハウを培ってきたUZUZグループ。登録者7万人超の就活YouTube「ひろさんチャンネル」など実践的コンテンツも充実しているので「本当に就職につながる支援」が提供できます。
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ④ オンラインでも対面でも安心のサポート
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">
        オンラインでもリアルでも安心して支援を受けられます。事業所には専門の相談員が常駐。いつでも対面でサポートします。加えて、仮想空間「MetaLife」も導入しているので、ご自宅からでも気軽に相談可能です。
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ⑤ あなただけの「オーダーメイド支援」
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">
        一人ひとりの個性や目標を大切に、専門スタッフがしっかり伴走。定期面談では学習コンテンツの進め方をはじめ、就職活動やメンタル面の支援も実施。実際に就職した後のフォローまで、あなたに合ったサポートを提供します。
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/lp/images/uzuzplus/why04.webp',
    fallbackText: '① IT分野に強い実践型カリキュラム',
    icon: <MousePointerClick size={24} />,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/lp/images/uzuzplus/why02.webp',
    fallbackText: '② 種類豊富なオンライン学習コンテンツ',
    icon: <MousePointerClick size={24} />,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/lp/images/uzuzplus/why01.webp',
    fallbackText: '③ 累計サポート８万件超！キャリア支援ノウハウ',
    icon: <MousePointerClick size={24} />,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-1',
    thumbnail: '/lp/images/uzuzplus/why05.webp',
    fallbackText: '④ オンラインでも対面でも安心のサポート',
    icon: <MousePointerClick size={24} />,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: 'md:col-span-1',
    thumbnail: '/lp/images/uzuzplus/why03.webp',
    fallbackText: '⑤ あなただけの「オーダーメイド支援」',
    icon: <MousePointerClick size={24} />,
  },
];
