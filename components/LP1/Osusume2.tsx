'use client';

import BgImg from '@/public/images/uzuzlp/2283401985_1200x800.png';
import Img2 from '@/public/images/flatimg/team-presentation-1-19-amber.png';
import Img3 from '@/public/images/flatimg/diversity-90-amber.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

const Osusume2: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="osusume2"
      className="h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50 w-full">
          {/* コンテンツ */}
          {/* TopSide */}
          <div className="sm:col-span-2 bg-white/75 rounded-4xl px-3 py-2 sm:p-10">
            <div className="flex justify-center items-center gap-1.5 sm:gap-2">
              <h3 className="font-bold font-zen-maru text-base sm:text-2xl [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)] underline decoration-amber-300 decoration-3 decoration-dashed underline-offset-3">
                ２. {funFactsData[1].title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] justify-center items-center">
              {/* LefttSide */}
              <div>
                <Image
                  src={Img2.src}
                  alt="UZUZのキャリアサポート"
                  width={600}
                  height={600}
                  className="max-w-2/3 sm:max-w-3/5 md:max-w-5/7 mx-auto max-h-24 sm:max-h-56 object-contain"
                />
              </div>
              {/* RightSide */}
              <div className="grid grid-cols-1 gap-1">
                <Accordion type="single" collapsible className="w-full">
                  {funFactsData[1].contents.map((content, i) => (
                    <AccordionItem key={i} value={`item-${i + 1}`}>
                      <AccordionTrigger className="justify-start items-center py-1.5 gap-1 sm:gap-1.5 text-xs sm:text-base leading-tight font-normal">
                        <div className="inline-flex w-5 h-5 sm:w-6 sm:h-6 rounded-full items-center justify-center text-amber-300">
                          <Check strokeWidth={4} />
                        </div>
                        {content.heading}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm">
                        {content.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          {/* BottomSide */}
          <div className="sm:col-span-2 bg-white/75 rounded-4xl p-4 sm:p-10">
            <div className="flex justify-center items-center gap-1.5 sm:gap-2">
              <h3 className="font-bold font-zen-maru text-base sm:text-2xl [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)] underline decoration-amber-300 decoration-3 decoration-dashed underline-offset-3">
                ３. {funFactsData[2].title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] justify-center items-center">
              {/* LefttSide */}
              <div>
                <Image
                  src={Img3.src}
                  alt="UZUZのキャリアサポート"
                  width={600}
                  height={600}
                  className="max-w-2/3 sm:max-w-3/5 md:max-w-5/7 mx-auto max-h-24 sm:max-h-56 object-contain"
                />
              </div>
              {/* RightSide */}
              <div className="grid grid-cols-1 gap-1">
                {funFactsData[2].contents.map((content, i) => (
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
                {/* <div className="text-sm sm:text-base leading-tight">
                        {content.heading}
                        <div className="text-sm mt-1">
                          {content.description}
                        </div>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osusume2;
