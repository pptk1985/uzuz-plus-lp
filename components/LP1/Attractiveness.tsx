'use client';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const funFactsData = [
  {
    iconName: 'aperture',
    title: '収入が高い',
    content:
      '施工管理の平均年収は620万円で、国民の平均年収である460万円を大きく上回っています。施工管理職は社会インフラや人々の生活基盤を作り上げる、非常に社会貢献性の高い仕事で将来にわたり安定した需要が見込まれるという魅力があります。',
  },
  {
    iconName: 'aperture',
    title: '手に職がつき、市場価値が高まる',
    content:
      '施工管理職は、経験を積むことで「施工管理技士」などの国家資格を取得できます。国家資格という一生モノのスキルを身につけることで、自分自身の価値が高まり、将来にわたり安定したキャリア形成が可能です。資格を取得すれば転職や独立の際にも圧倒的に有利となり、生涯に渡って活躍の幅が広がります。',
  },
  {
    iconName: 'aperture',
    title: '大規模プロジェクトを自ら動かす達成感',
    content:
      '住宅、マンション、商業施設、インフラなど、街のランドマークになるような大型案件に携わるチャンスがあります。自分が管理した建物や施設が地図に残り、多くの人の役に立つというやりがいがあります。',
  },
];

const Attractiveness: React.FC = () => {
  return (
    // ヘッダー分の余白を確保 pt-8 sm:pt-12、h-dvhでビューポート高さを100%にする
    <div
      id="attractive"
      className="pt-8 sm:pt-12 h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
            施工管理の魅力を紹介します！
          </h2>

          <div className="col-span-2 bg-white/75 sm:mx-12 px-8 py-4 rounded shadow">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`}>
                    <AccordionTrigger className="text-lg sm:text-xl font-zen-maru font-bold">
                      {i + 1}. {value.title}
                    </AccordionTrigger>
                    <AccordionContent>{value.content}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractiveness;
