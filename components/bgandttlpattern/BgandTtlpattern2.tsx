import React from 'react';
import ColourfulText from '@/components/ui/colourful-text';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Quote } from 'lucide-react';

import BgImg from '@/public/images/uzuzplus/mv.webp';

export default function BgandTtlpattern2() {
  return (
    <div className="relative">
      {/* 上半分：backgroundImageを表示 */}
      <div
        id="bgandttlpattern2"
        className="h-[50dvh] bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-center w-full h-full">
            <div className="border h-full flex justify-center items-center">
              <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold">
                タイトルテキスト
              </h2>
            </div>
            <div className="border h-full flex justify-center items-center">
              <h2 className="text-center bg-linear-to-r from-yellow-100 to-yellow-600 bg-clip-text text-3xl sm:text-6xl font-extrabold text-transparent">
                タイトルテキスト
              </h2>
            </div>
            <div className="border h-full flex justify-center items-center">
              <h2 className="text-center bg-white text-3xl sm:text-6xl font-extrabold p-1 sm:p-4">
                タイトルテキスト
              </h2>
            </div>
            <div className="border h-full flex justify-center items-center">
              <h2 className="text-center text-3xl sm:text-6xl font-extrabold">
                <Quote
                  fill="yes"
                  className="inline w-5 h-5 sm:w-9 sm:h-9 relative -top-2 sm:-top-4 rotate-180 mr-1 sm:mr-3"
                />
                前後にダブルクオーテーション
                <Quote
                  fill="yes"
                  className="inline w-5 h-5 sm:w-9 sm:h-9 relative -top-2 sm:-top-4 ml-1 sm:ml-3"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* 下半分：bg-logo-patternを表示 */}
      <div className="h-[50dvh] bg-logo-pattern-small px-2 sm:px-20 pb-14 sm:pb-18">
        <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-center w-full h-full">
            <div className="border h-full flex justify-center items-center">
              <h2 className="animate-flip-up text-3xl sm:text-6xl font-extrabold text-center text-slate-400">
                colourful text <ColourfulText text="漢字ひらがなカタカナ" />
                <br />
                w/ tailwind animated
              </h2>
            </div>
            <div className="border h-full flex justify-center items-center">
              <h2>
                <TextGenerateEffect words="aa bb cc ああ いい うう 嗚呼 井伊 憂う" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
