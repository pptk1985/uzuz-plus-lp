'use client';

import BgImg from '@/public/images/careeremonimg/hero_bg_1200x800.png';
import Img from '@/public/images/uzuzholdingsimg/s4_img2.png';
import Image from 'next/image';

const funFactsData = [
  {
    // iconName: 'aperture',
    title: '完全土日祝休み',
  },
  {
    // iconName: 'aperture',
    title: '残業少なめ',
  },
  {
    // iconName: 'aperture',
    title: '教育体制が整っている',
  },
  {
    // iconName: 'aperture',
    title: '福利厚生充実',
  },
];

const WhiteCompany: React.FC = () => {
  return (
    // ヘッダー分の余白を確保 pt-8 sm:pt-12、h-dvhでビューポート高さを100%にする
    <div
      id="white"
      className="pt-8 sm:pt-12 h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}

          {/* LeftSide */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={Img.src}
                alt="UZUZのキャリアサポート"
                width={600}
                height={600}
                className="w-3/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain [filter:drop-shadow(6px_3px_0px_#fff)]"
              />
            </div>
          </div>

          {/* RightSide */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-snug drop-shadow-lg underline decoration-8 decoration-dotted underline-offset-4 decoration-white -rotate-3 relative -top-3">
            ブラックを除外して、ホワイトな企業に絞ってご紹介が可能です！
          </h2>

          {/* BottomSide */}
          <div className="sm:col-span-2">
            <div className="font-bold text-slate-900 grid grid-cols-2 gap-2">
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <div className="p-2 sm:p-6 bg-white/75 rounded-full" key={i}>
                    <div className="flex justify-center items-center gap-1.5 sm:gap-2.5">
                      <div className="font-zen-maru text-sm sm:text-xl leading-tight">
                        {value.title}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="bg-amber-50/75 px-4 py-3 sm:px-5 sm:py-4 rounded-lg max-w-xl mx-auto">
              <div className="text-center text-sm text-slate-900 font-bold sm:text-lg [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                施工管理会社の中には「完全土日祝休み」「残業少なめ」「教育体制が整っている」「福利厚生充実」などの条件を満たす会社も存在します。
                今まで6万人以上の求職者をサポートしてきて、多数の施工管理の退職者の話を聞いてきました。
                そのノウハウや実績があるからこそ「ここには入社しちゃいけない」という情報を把握できてます。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteCompany;
