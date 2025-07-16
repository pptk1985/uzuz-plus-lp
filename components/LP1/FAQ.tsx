'use client';

import BgImg from '@/public/images/uzuzlp/2058573251_1200x800.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const funFactsData = [
  {
    title: 'どんな人がUZUZのキャリアサポートを利用していますか？',
    content:
      'IT業界に興味のある方、未経験から手に職をつけて安定的に働きたいと考えている20代の方などを中心にご利用いただいております。「もっと良い環境で働きたい」「収入を上げていきたい」「スキルが身に付く案件で働きたい」など、ご希望は人によって様々です。まずはお気軽にご相談ください。',
  },
  {
    title: 'キャリアサポートに料金はかかりますか？',
    content:
      '料金は一切かかりません。キャリアカウンセリング、求人紹介、面接対策などすべて無料でご利用可能です。',
  },
  {
    title: 'どのくらいの期間で内定が取れますか？',
    content:
      '平均すると1ヶ月程度で内定を獲得する方が多いですが、早い方ですと１週間かからない方もいらっしゃいます。皆さんの状況に合わせたスケジュールを組んでいきましょう。',
  },
  {
    title:
      'まだ就職（転職）活動するか決めたわけではないのですが、利用しても良いのでしょうか？',
    content:
      'もちろん大丈夫です。「自分の進路を相談したい」「今の自分が受けられる求人が知りたい」など、情報収集の一環としてキャリアサポートに登録される方はたくさんいらっしゃいます。どうか安心してご利用ください。',
  },
  {
    title:
      'ほかのキャリアサービスを使っているのですが、登録しても大丈夫ですか？',
    content:
      '問題ありません。より効率的に就職・転職活動を進めるために、また、自分の希望する企業に出会うために、複数のサービスを利用することをおすすめしています。いくつか併用しその中から自分に一番合ったサービスを選びましょう。',
  },
  {
    title: '地方に住んでいてもサポートは受けられますか？',
    content:
      'もちろん可能です。お電話・メール・LINE・オンライン面談などを中心にサポートを行っています。首都圏・関西圏・名古屋・福岡の求人が中心となりますが、施工管理の求人は全国的に募集があるので、その他の地域でも「若者を育てていきたい！」と考えている企業を多数ご紹介できます。',
  },
];

const FAQ: React.FC = () => {
  return (
    // ヘッダー分の余白を確保 pt-8 sm:pt-12、h-dvhでビューポート高さを100%にする
    <div
      id="faq"
      className="pt-8 sm:pt-12 h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
            よくある質問
          </h2>

          <div className="col-span-2 bg-white/75 px-6 py-3 sm:mx-12 rounded shadow">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`}>
                    <AccordionTrigger className="text-sm sm:text-xl font-zen-maru font-bold py-1.5 sm:py-4">
                      Q. {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm">
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
};

export default FAQ;
