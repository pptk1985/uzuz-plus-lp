import React from 'react';
import ColourfulText from '@/components/ui/colourful-text';
import { TextGenerateEffect } from '../ui/text-generate-effect';

import { MapPin } from 'lucide-react';
import BgImg from '@/public/images/uzuzplus/mv.webp';
import Logo from '@/public/images/uzuzplus/logo_uzuzplus.svg';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative">
      {/* 上半分 */}
      <div
        id="hero"
        className="relative h-[67dvh] px-2 sm:px-20 pt-14 sm:pt-18 overflow-hidden"
      >
        {/* 背景画像を最適化するために普通の画像（<Image>）として読み込む */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BgImg}
            alt="ヒーロー背景"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* 背景色オーバーレイ */}
        <div className="absolute inset-0 z-0 bg-blue-400/50 mix-blend-multiply" />

        {/* コンテンツ */}
        <div className="relative z-10 flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-end w-full h-full">
            <div className="h-full flex justify-left items-end">
              <div className="text-white text-base sm:text-2xl font-bold tracking-wide">
                <span className="inline-block text-center bg-orange-500/75 border border-orange-500 rounded-full px-3 py-1 mb-1 mr-2 font-zen-maru animate-wiggle animate-thrice animate-delay-1000">
                  <MapPin className="inline-block w-5 h-5 sm:w-6 sm:h-6 relative -top-0.5 sm:-top-1 mr-0.5" />
                  大阪就職
                </span>
                <br />
                <span className="inline-block text-center bg-orange-500/75 border border-orange-500 rounded-full px-3 pr-2 py-1 mb-1 font-zen-maru animate-wiggle animate-thrice animate-delay-1000">
                  IT・オフィスワーク
                </span>
                <span className="inline-block text-right ml-2 -rotate-2">
                  に特化！
                </span>
              </div>
            </div>
            <div className="h-full flex justify-center items-center"></div>
            <div className="col-span-2">
              <h2 className="animate-flip-up text-3xl sm:text-6xl font-extrabold text-white leading-snug mb-4">
                <span className="bg-white px-3 mr-2">
                  <ColourfulText text="スキル" />
                </span>
                <span className="text-2xl sm:text-5xl">も、</span>
                <span className="bg-white px-3 mr-2">
                  <ColourfulText text="キャリア" />
                </span>
                <span className="text-2xl sm:text-5xl">も、</span>
                <br />
                諦めない。
              </h2>
              <div className="bg-slate-950 px-3 py-1.5 inline-block mb-4 items-center">
                <TextGenerateEffect words="病気 や 障害 がある方 向けの 『就労移行支援』 サービス" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 下半分 */}
      <div className="h-[33dvh] bg-logo-pattern-small px-2 sm:px-20 pb-14 sm:pb-18">
        <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 justify-center items-center w-full h-full">
            <div className="col-span-2 h-full flex justify-center items-center">
              <div className="space-y-1 sm:space-y-2 bg-white/75 p-2 sm:p-4 border">
                <div className="text-center text-sm sm:text-xl font-semibold">
                  病気・障害があっても、 誰もがウズウズ働ける世の中をつくる。
                </div>
                <div className="text-xs sm:text-base">
                  どんな壁があってもウズウズ働けるのが「当たり前」の社会へ。
                  その理想を現実に変えるため、私たちは一人ひとりと向き合い続けます。
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <Image
                src={Logo}
                alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                width={400}
                height={400}
                className="sm:p-2 [filter:drop-shadow(2px_1px_0px_#94a3b8)] sm:[filter:drop-shadow(4px_2px_0px_#94a3b8)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
