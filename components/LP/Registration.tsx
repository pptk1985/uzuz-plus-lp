import React from 'react';
import Image from 'next/image';
import RegistrationForm from '@/components/LP/RegistrationForm';

import BgImg from '@/public/images/uzuzplus/1370060195.png';
import Map from '@/public/images/uzuzplus/2261336337-pin.png';
import { MessageCirclePlus } from 'lucide-react';

export default function Registration() {
  return (
    <div className="relative">
      {/* 上半分 */}
      <div
        id="registration"
        className="relative h-dvh px-2 sm:px-20 pt-14 sm:pt-18 overflow-hidden pb-16"
      >
        {/* 背景画像を最適化するために普通の画像（<Image>）として読み込む */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BgImg}
            alt="お申し込み背景"
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
          <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-1 sm:mb-4 drop-shadow">
            無料相談・見学 受付中
            <MessageCirclePlus className="w-12 h-12 sm:w-20 sm:h-20 pb-3 sm:pb-5 inline-block" />
          </h2>
          <div className="text-center text-white text-xs sm:text-lg font-semibold mb-2 sm:mb-4 drop-shadow">
            まずはご相談・見学のみでもOK！お気軽にお申し込みください。
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 justify-center items-center w-full h-full">
            <div className="h-full hidden sm:flex flex-col justify-center items-center space-y-3">
              <div className="relative text-slate-900 font-bold bg-white p-4 rounded-2xl font-zen-maru w-full">
                <div className="absolute -top-2.5 -left-2.5 z-10 bg-blue-500 w-8 aspect-square rounded-full flex items-center justify-center font-bold text-xl  font-dancing-script text-white shadow">
                  1
                </div>
                事業所見学で雰囲気をご確認いただけます。質問や疑問なども、お気軽にご相談ください。
              </div>
              <div className="relative text-slate-900 font-bold bg-white p-4 rounded-2xl font-zen-maru w-full">
                <div className="absolute -top-2.5 -left-2.5 z-10 bg-blue-500 w-8 aspect-square rounded-full flex items-center justify-center font-bold text-xl  font-dancing-script text-white shadow">
                  2
                </div>
                実際のプログラムに参加し、支援内容が自分に合っているか体験できます。短時間の参加も可能です。
              </div>
              {/* ITに強い、一番就職につながる就労移行支援を大阪から。 */}
              <div className="grid grid-cols-2 justify-center items-center text-slate-900 font-bold bg-white px-4 py-3 rounded-2xl font-zen-maru w-full">
                <div>
                  場所：
                  <br />
                  大阪府大阪市北区南扇町 1番5号 UAKビル2F
                </div>
                <Image
                  src={Map}
                  alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                  width={130}
                  height={130}
                  className="mx-auto opacity-90"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* フォーム */}
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
