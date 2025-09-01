import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import BgImg from '@/public/images/uzuzplus/IMG_2698.png';
import Image from 'next/image';

export default function Pricing() {
  return (
    <div className="relative">
      {/* 上半分 */}
      <div
        id="pricing"
        className="relative h-[70dvh] px-2 sm:px-20 pt-14 sm:pt-18 overflow-hidden"
      >
        {/* 背景画像を最適化するために普通の画像（<Image>）として読み込む */}
        <div className="absolute inset-0 z-0">
          <Image
            src={BgImg}
            alt="料金背景"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* 背景色オーバーレイ */}
        <div className="absolute inset-0 z-0 bg-emerald-500/50 mix-blend-multiply" />

        {/* コンテンツ */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-4xl mx-auto pb-4">
          <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold mb-2 sm:mb-4">
            料金
          </h2>
          <div className="text-center text-white text-sm sm:text-lg font-semibold mb-4">
            月々の負担額についてご説明します。
          </div>
          <div className="grid grid-cols-4 gap-0.5 justify-center items-center w-full h-full">
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-900 text-white font-bold p-2">
              区分
            </div>
            <div className="col-span-2 border h-full flex justify-center items-center text-xs sm:text-base bg-slate-900 text-white font-bold p-2">
              世帯の年収状況
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-900 text-white font-bold p-2">
              負担上限/月
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-white p-2">
              生活保護
            </div>
            <div className="col-span-2 border h-full flex justify-center items-center text-xs sm:text-base bg-white p-2">
              生活保護受給世帯
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-white p-2">
              0円
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              低所得
            </div>
            <div className="col-span-2 border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              市町村民税非課税世帯(※1)
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              0円
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-white p-2">
              一般1
            </div>
            <div className="col-span-2 border h-full flex flex-col justify-center items-center text-xs sm:text-base bg-white p-2">
              市町村民税課税世帯(所得割16万円(※2)未満)
              <br />
              <span className="text-xxs sm:text-sm">
                ※入所施設利用者(20歳以上)、グループホーム利用者を除きます(※3)
              </span>
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-white p-2">
              9,300円
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              一般2
            </div>
            <div className="col-span-2 border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              上記以外
            </div>
            <div className="border h-full flex justify-center items-center text-xs sm:text-base bg-slate-200 p-2">
              37,200円
            </div>
          </div>
        </div>
      </div>

      {/* 下半分 */}
      <div className="h-[30dvh] bg-memphis px-2 sm:px-20 pb-14 sm:pb-18 pt-1.5">
        <div className="flex justify-center items-center h-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-1 justify-center items-center w-full h-full">
            <div className="h-full flex justify-center items-center">
              <div className="bg-white/75 p-2 sm:p-4 border">
                <div className="text-xs sm:text-base">
                  前年度の世帯所得（ご本人の収入＋配偶者の収入）によって変動しますが、約9割の方が無料で利用されています。詳しくは無料相談でご確認ください。
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-sm sm:text-base">
                    注釈について
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle>注釈について</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
                    <div>
                      ※1：3人世帯で障害基礎年金1級受給の場合、収入が概ね300万円以下の世帯が対象となります。
                    </div>
                    <div>※2：収入が概ね670万円以下の世帯が対象になります。</div>
                    <div>
                      ※3：入所施設利用者(20歳以上)、グループホーム利用者は、市町村民税課税世帯の場合「一般2」となります。
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
