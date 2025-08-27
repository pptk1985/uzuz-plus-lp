import React from 'react';
import { Tabs } from '../ui/animatedtabs';

import BgImg from '@/public/images/uzuzplus/mv02.webp';
import { PenTool, LaptopMinimalCheck } from 'lucide-react';

export default function Program() {
  const tabs = [
    {
      title: 'ジョブスキル',
      value: 'tab1',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xs sm:text-xl font-semibold text-slate-900 bg-gradient-to-br from-blue-600 to-blue-900">
          <h3 className="text-xl sm:text-4xl font-extrabold text-center text-white underline underline-offset-8 decoration-2 flex justify-center items-center gap-2">
            <PenTool className="w-9 h-9 relative top-1" />
            ジョブスキル トレーニング
          </h3>
          <div className="grid grid-cols-3 gap-1 sm:gap-3 justify-center items-center w-full h-full pt-4 pb-10">
            <div className="col-span-3 h-auto flex justify-center items-center text-white">
              ビジネスマナーや自己理解、履歴書・職務経歴書の作成、
              面接対策など、就職や転職に必要な基礎力がしっかり身につきます。
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              ソーシャルスキル
              <br />
              トレーニング
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              ビジネスマナー
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              自己理解
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              履歴書作成
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              職務経歴書作成
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              企業紹介
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              面接対策
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'IT・PCスキル',
      value: 'tab2',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xs sm:text-xl font-semibold text-slate-900 bg-gradient-to-br from-teal-600 to-teal-900">
          <h3 className="text-xl sm:text-4xl font-extrabold text-center text-white underline underline-offset-8 decoration-2 flex justify-center items-center gap-2">
            <LaptopMinimalCheck className="w-9 h-9 relative top-1" />
            IT・PCスキル トレーニング
          </h3>
          <div className="grid grid-cols-3 gap-1 sm:gap-3 justify-center items-center w-full h-full pt-4 pb-10">
            <div className="col-span-3 h-auto flex justify-center items-center text-white">
              IT未経験でも安心。専門スタッフが基礎から丁寧に教えるの
              で、得意なことを見つけながら専門スキルが身につきます。
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              IT パスポート
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              Excel
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              Word
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              PowerPoint
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              GAS
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              CCNA
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              LinuC
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              Java
            </div>
            <div className="border-3 sm:border-6 border-orange-300 h-14 sm:h-24 flex justify-center items-center text-center bg-white rounded-full font-zen-maru shadow-lg">
              SQL
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="program"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-slate-600 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex-col justify-center items-center h-full max-w-6xl mx-auto">
        <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-2 sm:mb-4">
          支援プログラムの紹介
        </h2>
        <div className="text-center text-white text-sm sm:text-lg font-semibold mb-4">
          UZUZ Plus+の支援プログラムは2つの柱で構成！
          <br />
          ジョブスキルトレーニング × IT・PCスキルトレーニング
        </div>
        <div className="h-4/5 [perspective:1000px] relative flex flex-col mx-auto w-full items-center justify-center">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
