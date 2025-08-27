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

export default function Pricing() {
  return (
    <div className="relative">
      {/* 上半分：backgroundImageを表示 */}
      <div
        id="pricing"
        className="h-[70dvh] bg-cover bg-center bg-emerald-900 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full max-w-5xl mx-auto pb-4">
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
              <span className="text-[10px] sm:text-sm">
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

      {/* 下半分：bg-logo-patternを表示 */}
      <div className="h-[30dvh] bg-memphis px-2 sm:px-20 pb-14 sm:pb-18 pt-1.5">
        <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
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
