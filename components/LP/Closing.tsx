import React from 'react';
import ColourfulText from '@/components/ui/colourful-text';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

import BgImg from '@/public/images/uzuzplus/IMG_2607.png';
import Logo from '@/public/images/uzuzplus/logo_uzuzplus.svg';
import { Link, MessageCirclePlus } from 'lucide-react';

export default function Closing() {
  return (
    <div className="relative">
      {/* 上半分：backgroundImageを表示 */}
      <div
        id="closing"
        className="h-[67dvh] bg-cover bg-center bg-slate-900 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-start w-full h-full">
            <div className="col-span-2 h-full flex justify-center items-center">
              <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold">
                運営会社｜UZUZ Plus
              </h2>
            </div>
            <div className="col-span-2">
              <div className="text-white text-xs sm:text-lg bg-black/75 p-3 sm:p-6 border">
                UZUZ
                Plusでは基本的な就労移行支援に加え、強みである「8万人以上に展開した就職・転職ノウハウ」「ITスキル学習支援」「一人ひとりの特性やペースに合わせた安心の個別サポート」を活かし、あなたが“ウズウズ働く”ための一歩を後押しします。
              </div>
            </div>
            <div className="col-span-2 h-full flex flex-col justify-center items-center">
              <div className="animate-flip-up text-3xl sm:text-6xl font-extrabold text-white leading-snug mb-4">
                <span className="bg-white px-3 mr-2">
                  <ColourfulText text="無料相談" />
                </span>
                ・
                <span className="bg-white px-3 mr-2">
                  <ColourfulText text="無料見学" />
                </span>
                <br />
                <div className="text-center">受付中です！</div>
              </div>
              <div className="text-white text-base sm:text-2xl font-bold">
                まずはご相談・見学のみでもOKです。お気軽にお申し込みください。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 下半分：bg-logo-patternを表示 */}
      <div className="h-[33dvh] bg-logo-pattern-small px-2 sm:px-20 pb-14 sm:pb-18">
        <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 justify-center items-center w-full h-full">
            <div className="col-span-2 h-full flex justify-center items-center">
              <div className="space-y-1 sm:space-y-2 bg-white/75 p-2 sm:p-4 border">
                <div className="text-center text-sm sm:text-xl font-semibold">
                  株式会社UZUZ Plus
                </div>
                <ul className="text-xs sm:text-base">
                  <li className="flex items-center">06-7167-2222</li>
                  <li className="flex items-center">support@uzuz-plus.jp</li>
                  <li className="flex items-center">
                    〒530-0052 大阪府大阪市北区南扇町1番5号 UAKビル2F
                  </li>
                </ul>
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
              <Separator className="my-1 sm:my-3" />
              <ul className="text-xs sm:text-sm text-blue-700 font-bold">
                <li className="inline-block mr-1 sm:mr-3">
                  <a
                    href="https://uzuz-plus.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75"
                  >
                    <Link className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 pb-0.5 mr-px" />
                    HP
                  </a>
                </li>
                <li className="inline-block mr-1 sm:mr-3">
                  <a
                    href="https://uzuz-plus.jp/company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75"
                  >
                    <Link className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 pb-0.5 mr-px" />
                    会社概要
                  </a>
                </li>
                <li className="inline-block mr-1 sm:mr-3">
                  <a
                    href="https://uzuz-plus.jp/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75"
                  >
                    <Link className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 pb-0.5 mr-px" />
                    個人情報保護方針
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
