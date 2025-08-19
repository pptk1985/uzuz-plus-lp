'use client';

import { Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PriceData = [
  'キャリア相談',
  '求人紹介',
  '応募書類添削',
  '面接対策',
  'スケジュール調整/条件交渉',
  '入社後フォロー',
];

interface PriceProps {
  setIndex?: (index: number) => void;
}

const Price: React.FC<PriceProps> = ({ setIndex }) => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div id="price" className="h-dvh bg-repeat bg-1">
      <div className="flex justify-center items-center h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50 w-full">
          {/* コンテンツ */}
          {/* LefttSide */}
          <div>
            <h2 className="max-w-xl mx-auto text-gray-900 text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight [text-shadow:_2px_3px_0_rgb(255_255_255_/_100%)] mb-2 sm:mb-4">
              キャリエモンは完全無料のキャリアサービスです！
            </h2>
            <div className="bg-white/65 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl">
              <div className="font-zen-maru text-sm text-slate-900 font-bold sm:text-lg [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                すべてのキャリアサービスを完全無料で受けることができます。追加料金などが発生することは一切ありません。
              </div>
            </div>
          </div>
          {/* RightSide */}
          <div className="grid grid-cols-1 gap-1.5 sm:gap-3 bg-white border rounded-md p-4 sm:p-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-center mb-1">
                キャリサポート料金
              </div>
              <div className="mb-2 sm:mb-5 text-xs text-center text-muted-foreground">
                登録 ～ 入社/後までのトータルサポート
              </div>
              <div className="text-center">
                <span className="font-bold text-3xl sm:text-6xl text-amber-300 font-zen-maru [text-shadow:_2px_3px_0_rgb(0_0_0_/_100%)]">
                  ０円
                </span>
                <span className="text-lg text-muted-foreground">
                  （完全無料）
                </span>
              </div>
            </div>
            {/* ボタンセクション */}
            <div className="flex flex-wrap gap-4 lg:gap-[4%] justify-center items-center">
              <Button
                asChild
                size="lg"
                className="font-extrabold shadow-sm text-lg sm:text-xl w-full h-10 sm:h-12 gap-1 rounded my-2 sm:my-3"
              >
                <Link
                  href="#registration"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex?.(1);
                    window.location.hash = 'registration';
                  }}
                >
                  <Smile strokeWidth={2.5} className="!w-6 !h-6" />
                  <span className="drop-shadow-sm font-zen-maru">
                    キャリア相談はこちら
                  </span>
                </Link>
              </Button>
            </div>
            {PriceData &&
              PriceData.map((value, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[24px_1fr] justify-start items-center gap-1"
                >
                  <div className="inline-flex bg-amber-300 w-5 h-5 sm:w-6 sm:h-6 rounded-full items-center justify-center text-white font-black text-lg sm:text-xl pb-0.5 shadow">
                    <span className="drop-shadow">{i + 1}</span>
                  </div>
                  <div className="font-zen-maru text-sm sm:text-base [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                    {value}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
