import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import BgImg from '@/public/images/uzuzlp/2058573251_1200x800.png';
import Image from 'next/image';

const faqData = [
  {
    title: '障害者手帳を持っていなくても利用できますか？',
    content:
      'はい。医師の診断書や定期的な通院があれば、障害者手帳がなくてもご利用いただける場合があります。まずはお気軽にお問い合わせください。',
  },
  {
    title: '利用料金はどれくらいかかりますか？',
    content:
      'サービス利用時の料金は前年度の世帯所得によって変動しますが、約9割の方は無料での利用が可能です。費用面に関して不安がある方は、スタッフまでお気軽にご相談ください。',
  },
  {
    title: '毎日通える自信がありません。',
    content:
      'ご安心ください。週1からの利用が可能です。あなたの体調・ペースを最優先に、通所日数や時間も柔軟に調整します。',
  },
  {
    title: 'ITはまったくの未経験なのですが、大丈夫でしょうか？',
    content:
      'はい。問題ありません。弊社には、未経験の方に向けた学習コンテンツや就職ノウハウが多数蓄積されています。安心してご利用ください。',
  },
  {
    title: 'まずは見学だけしたいのですが...',
    content:
      '見学だけでも大歓迎です。他事業所と比較した上で施設を決める方が大半なので、お気軽にお越しください。見学の際疑問や不安点があれば、スタッフがすべてお答えします。',
  },
  {
    title: 'どのくらいで就職できますか？',
    content:
      '中には3ヶ月前後で就職される方もいますが、多くの方は半年〜1年ほどです。体調やご状況によって就職までの期間は変わるので、お一人おひとりに合わせたスケジュールをご提案します。',
  },
];

export default function FAQ() {
  return (
    // 外側の背景
    <div className="bg-logo-pattern">
      <div
        id="faq"
        className="relative h-dvh px-2 sm:px-20 pt-14 sm:pt-18 overflow-hidden"
        style={{
          clipPath: 'circle(60% at 50% 56%)',
        }}
      >
        {/* 背景画像を最適化するために普通の画像（<Image>）として読み込む */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BgImg}
            alt="FAQ背景"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* 背景色オーバーレイ */}
        <div className="absolute inset-0 z-0 bg-cyan-400/50 mix-blend-multiply" />
        {/* コンテンツ */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-4xl mx-auto">
          <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-6 drop-shadow">
            よくあるご質問
          </h2>
          <div className="col-span-2 bg-white/75 px-6 py-3 sm:mx-12 rounded shadow">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {faqData &&
                faqData.map((value, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`}>
                    <AccordionTrigger className="text-sm sm:text-lg font-zen-maru font-bold py-1.5 sm:py-4">
                      Q. {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      {value.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
