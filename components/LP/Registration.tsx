import React from 'react';
import Image from 'next/image';
import RegistrationForm from '@/components/LP/RegistrationForm';

import BgImg from '@/public/images/uzuzplus/registration_1200x800.png';
import CornerImg from '@/public/images/uzuzplus/logo_uzuzplus-w.svg';
import { MessageCirclePlus } from 'lucide-react';
import Map from '@/public/images/uzuzplus/2261336337-pin.png';

export default function Registration() {
  return (
    <div className="relative">
      {/* 上半分：backgroundImageを表示 */}
      <div
        id="registration"
        className="h-[67dvh] bg-cover bg-center bg-cyan-600 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full max-w-4xl mx-4 sm:mx-auto">
          {/* <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-2 sm:mb-4">
            無料相談・見学
            <br />
            申し込みフォーム
            <MessageCirclePlus className="w-20 h-20 pb-5 ml-0.5 inline-block" />
          </h2> */}
          <div className="grid grid-cols-1 gap-3 sm:gap-6 justify-center items-center w-full h-full">
            <RegistrationForm />
          </div>
        </div>
      </div>

      {/* 下半分：bg-logo-patternを表示 */}
      <div className="h-[33dvh] bg-dot px-2 sm:px-20 pb-14 sm:pb-18">
        <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 justify-center items-center w-full h-full">
            <div className="col-span-2 h-full flex flex-col justify-center items-center">
              <div className="text-center text-sm sm:text-xl font-semibold underline decoration-orange-300 decoration-6">
                まずはご相談・見学のみでもOKです。お気軽にお申し込みください！
              </div>
              IT に強い、一番就職につながる就労移行支援を大阪から。
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <Image
                src={Map}
                alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                width={400}
                height={400}
                className="sm:p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
