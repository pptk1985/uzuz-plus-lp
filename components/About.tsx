'use client';

import BgImg from '@/public/images/uzuz_entertaincareer.png';
import Img from '@/public/images/logo_600x600.png';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="about"
      className="h-dvh bg-cover bg-center bg-gray-900 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}

          {/* LeftSide */}
          <h2 className="max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-snug drop-shadow-lg">
            運営会社｜株式会社UZUZ
          </h2>

          {/* RightSide */}
          <div className="bg-white rounded-full flex justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={Img.src}
                alt="UZUZのキャリアサポート"
                width={600}
                height={600}
                className="w-2/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* BottomSide */}
          <div className="sm:col-span-2">
            <p className="text-white text-xs sm:text-base">
              株式会社UZUZはウズウズした若者に活躍の場を提供するべく人材紹介サービスを実施しております。その他にも就活サイトの運営、企業に対する採用コンサルティング事業を提供しております。
            </p>
          </div>
          <div className="bg-amber-50/75 px-4 py-2 sm:px-5 sm:py-4 rounded-lg max-w-xl h-full">
            <h3 className="font-bold text-lg text-center mb-1">リンク</h3>
            <ul className="text-xs sm:text-base list-disc list-inside">
              <li>
                <a href="https://uzuz.jp/">株式会社UZUZ</a>
              </li>
              <li>
                <a href="https://uzuz.jp/pms/">個人情報保護方針</a>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50/75 px-4 py-2 sm:px-5 sm:py-4 rounded-lg max-w-xl h-full">
            <h3 className="font-bold text-lg text-center mb-1">
              お問い合わせ先
            </h3>
            <ul className="text-xs sm:text-base">
              <li>
                東京都新宿区西新宿3 丁目11-20 オフィススクエアビル新宿 3階
              </li>
              <li>03-5333-0802</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
