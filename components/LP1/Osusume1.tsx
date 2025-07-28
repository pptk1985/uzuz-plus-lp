'use client';

import BgImg from '@/public/images/uzuzlp/2283401985_1200x800.png';
import Img from '@/public/images/flatimg/progress-14-amber300.png';

import { Check } from 'lucide-react';
import Image from 'next/image';

const funFactsData = [
  {
    title: '採用市場を知り尽くしたプロが専任でつく',
    contents: [
      {
        heading: '面談ではあなたの希望・こだわり・適正を考慮',
        description: '',
      },
      {
        heading: '希望が叶う求人をご紹介',
        description: '',
      },
      {
        heading: '「どんな仕事が向いているかわからない…」という方でも安心',
        description: '',
      },
      {
        heading:
          '面談後は「そんな仕事あるんだ！それならやってみたいかも」と前向きな気持ちになる方多数',
        description: '',
      },
    ],
  },
  {
    title: 'あなたに合わせたオーダーメイド型の就業サポート',
    contents: [
      {
        heading: '完全オーダーメイドの面接対策',
        description:
          '企業情報に精通したアドバイザーが、選考企業に合わせた面接対策を実施します。内定率が高まるように、あなたの経歴や強みに合わせて、あなただけの面接対策を受けられます。',
      },
      {
        heading: '充実した就職支援コンテンツ',
        description:
          'キャリエモンの運営会社であるUZUZのYouTube「ひろさんチャンネル」の登録者数は７万人以上。創業以来培ってきた内定獲得ノウハウを多数発信しており、高評価率は97%にも上ります。',
      },
    ],
  },
  {
    title: '優良企業多数！ブラック企業は徹底排除',
    contents: [
      {
        heading: 'ポテンシャルを重視し、20代の若手を積極採用している企業',
        description: '',
      },
      {
        heading:
          '法人サービスを扱っているため知名度は高くないものの、業績好調な優良企業',
        description: '',
      },
      {
        heading: '今後さらなる発展が期待できる注目のベンチャー企業',
        description: '',
      },
      {
        heading: '事業拡大に伴い、若手を採用したいと考えている大手企業',
        description: '',
      },
    ],
  },
];

const Osusume1: React.FC = () => {
  return (
    // ヘッダー分の余白を確保 pt-8 sm:pt-12、h-dvhでビューポート高さを100%にする
    <div
      id="osusume1"
      className="pt-8 sm:pt-12 h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50 w-full">
          {/* コンテンツ */}
          {/* LefttSide */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
            キャリエモンのキャリアサポートがおすすめの３つの理由！
          </h2>
          {/* RightSide */}
          <div className="">
            <div className="font-bold grid grid-cols-1 gap-2">
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <div
                    className="px-3.5 py-2 sm:px-3 sm:py-4 bg-white/75 rounded-full"
                    key={i}
                  >
                    <div className="grid grid-cols-[30px_1fr] justify-start items-center gap-1.5 sm:gap-2">
                      <div className="inline-flex bg-amber-300 w-7 h-7 sm:w-8 sm:h-8 rounded-full items-center justify-center text-white font-black text-2xl sm:text-3xl pb-1 shadow">
                        <span className="drop-shadow">{i + 1}</span>
                      </div>
                      <div className="font-zen-maru text-sm sm:text-lg [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                        {value.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* BottomSide */}
          <div className="sm:col-span-2 bg-white/75 rounded-4xl p-4 sm:p-10">
            <div className="flex justify-center items-center gap-1.5 sm:gap-2">
              <h3 className="font-bold font-zen-maru text-base sm:text-2xl [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)] underline decoration-amber-300 decoration-3 decoration-dashed underline-offset-3 mb-1 sm:mb-2">
                理由①. {funFactsData[0].title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] justify-center items-center">
              {/* LefttSide */}
              <div>
                <Image
                  src={Img.src}
                  alt="UZUZのキャリアサポート"
                  width={600}
                  height={600}
                  className="max-w-2/3 sm:max-w-3/5 md:max-w-5/7 mx-auto max-h-24 sm:max-h-56 object-contain"
                />
              </div>
              {/* RightSide */}
              <div className="grid grid-cols-1 gap-1">
                {funFactsData[0].contents.map((content, i) => (
                  <div className="" key={i}>
                    <div className="grid grid-cols-[24px_1fr] justify-start items-center gap-1 sm:gap-1.5">
                      <div className="inline-flex w-5 h-5 sm:w-6 sm:h-6 rounded-full items-center justify-center text-amber-300">
                        <Check strokeWidth={4} />
                      </div>
                      <div className="text-xs sm:text-base leading-tight">
                        {content.heading}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osusume1;
