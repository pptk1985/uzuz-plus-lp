'use client';

import BgImg from '@/public/images/uzuz_entertaincareer.png';
import Img from '@/public/images/uzuzholdingsimg/s4_img1.png';

import {
  BadgeJapaneseYen,
  Building2,
  Globe,
  Handshake,
  UserRoundCheck,
  Aperture,
} from 'lucide-react';
import Image from 'next/image';

// Lucideアイコンのマッピング
const iconMap: { [key: string]: React.JSX.Element } = {
  yen: <BadgeJapaneseYen className="w-4 h-4 sm:w-8 sm:h-8" />,
  globe: <Globe className="w-4 h-4 sm:w-8 sm:h-8" />,
  handshake: <Handshake className="w-4 h-4 sm:w-8 sm:h-8" />,
  user: <UserRoundCheck className="w-4 h-4 sm:w-8 sm:h-8" />,
  building: <Building2 className="w-4 h-4 sm:w-8 sm:h-8" />,
  aperture: <Aperture className="w-4 h-4 sm:w-8 sm:h-8" />,
};

const funFactsData = [
  {
    iconName: 'aperture',
    title: '就職活動の進め方が分からない',
  },
  {
    iconName: 'aperture',
    title: '転職活動を効率よく進めたい',
  },
  {
    iconName: 'aperture',
    title: '自己分析がうまくできない',
  },
  {
    iconName: 'aperture',
    title: '自分に合う仕事や会社が分からない',
  },
  {
    iconName: 'aperture',
    title: '面接で失敗したくない',
  },
  {
    iconName: 'aperture',
    title: '未経験で就職/転職できるか不安',
  },
];

const SolveProblems: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="solve"
      className="h-dvh bg-cover bg-center bg-cyan-400 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}

          {/* LeftSide */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
            私たちが、これらの悩みや不安をすべて解決します！
          </h2>

          {/* RightSide */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={Img.src}
                alt="UZUZのキャリアサポート"
                width={600}
                height={600}
                className="w-3/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain max-h-40 sm:max-h-64 [filter:drop-shadow(6px_3px_0px_#fff)]"
              />
            </div>
          </div>

          {/* BottomSide */}
          <div className="sm:col-span-2">
            <div className="font-bold text-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-4">
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <div
                    className="p-2.5 sm:p-5 rounded-md bg-white/75 shadow"
                    key={i}
                  >
                    <div className="flex justify-start items-center gap-1.5 sm:gap-2.5">
                      <span className="bg-white rounded-full p-0.5 sm:p-1 text-cyan-300 shadow-md">
                        {iconMap[value.iconName]}
                      </span>
                      <div className="font-zen-maru text-sm sm:text-xl leading-tight">
                        {value.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveProblems;
