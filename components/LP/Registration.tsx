import React from 'react';
import Image from 'next/image';
import RegistrationForm from '@/components/LP/RegistrationForm';

import BgImg from '@/public/images/uzuzplus/539641126_1200x800.png';
import CornerImg from '@/public/images/uzuzplus/logo_uzuzplus-w.svg';
// import { MessageCirclePlus } from 'lucide-react';

export default function Registration() {
  return (
    <div className="bg-logo-pattern">
      <div
        id="registration"
        // h-dvhでビューポート高さを100%にする
        className="h-dvh bg-cover bg-center bg-slate-600 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
          clipPath: 'circle(60% at 50% 56%)',
        }}
      >
        {/* 左上の角の画像 */}
        <div className="absolute top-8 left-2 w-26 h-26 sm:w-42 sm:h-42 -rotate-12 z-10">
          <Image
            src={CornerImg.src}
            alt="Corner Image"
            className="w-full h-full object-contain"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-full max-w-4xl mx-4 sm:mx-auto">
          {/* <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-2 sm:mb-4">
            無料相談・見学
            <br />
            申し込みフォーム
            <MessageCirclePlus className="w-18 h-18 pb-4 ml-0.5 inline-block" />
          </h2>
          <div className="text-center text-white text-sm sm:text-lg font-semibold mb-4">
            まずはご相談・見学のみでもOKです。お気軽にお申し込みください。
          </div> */}
          <div className="grid grid-cols-1 gap-3 sm:gap-6 justify-center items-center w-full h-full">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
