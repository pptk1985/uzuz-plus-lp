import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, Smile } from 'lucide-react';
import person from '@/public/images/careeremonimg/2382160085_600x600.png';
import BgImg from '@/public/images/careeremonimg/hero_bg_1200x800.png';

interface HeroProps {
  setIndex?: (index: number) => void;
}

const HeroSection: React.FC<HeroProps> = ({ setIndex }) => {
  return (
    // h-dvhでビューポート高さを100%にする
    <div
      id="hero"
      className="h-dvh bg-cover bg-center bg-cyan-600 bg-blend-overlay"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-min gap-2 sm:gap-6 justify-center items-center mx-6 sm:mx-10 xl:mx-50">
          {/* コンテンツ */}
          {/* LeftSide */}
          <div className="animate-fade-right">
            <h1 className="font-zen-maru max-w-xl mx-auto text-white text-3xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-black leading-tight drop-shadow-lg">
              あなたの就職・転職は &ldquo;キャリエモン&rdquo; にお任せ！
            </h1>
          </div>
          {/* RightSide */}
          <div className="flex justify-center items-center">
            <div className="animate-banner-image animate-fade-up w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src={person}
                alt="20代の就職を徹底サポート！ウズウズ｜株式会社UZUZ"
                width={600}
                height={600}
                className="w-3/5 sm:w-full sm:max-w-96 mx-auto h-auto object-contain"
              />
            </div>
          </div>
          {/* LeftSide */}
          <div>
            <div className="bg-white/65 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl">
              <div className="font-zen-maru text-sm text-slate-900 font-bold sm:text-lg [text-shadow:_1px_2px_0_rgb(255_255_255_/_100%)]">
                キャリエモンのキャリアサポートはプロが「就職・転職相談」や「求人紹介」「応募書類添削」などを
                <span className="underline decoration-2 underline-offset-2 decoration-amber-300 px-0.5">
                  完全無料
                </span>
                で支援してくれるサービスです。就活や転職で悩んでいる人は気軽に使ってみよう！
              </div>
            </div>
          </div>
          {/* RightSide */}
          <div>
            {/* ボタンセクション */}
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="font-extrabold shadow-sm text-lg sm:text-xl w-full h-10 sm:h-12 gap-1"
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
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-extrabold shadow-sm text-lg sm:text-xl w-full h-10 sm:h-12 gap-1 border-2 border-primary"
              >
                <Link
                  href="#flow"
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex?.(8);
                    window.location.hash = 'flow';
                  }}
                >
                  <Play
                    fill="white"
                    strokeWidth={2.5}
                    className="text-primary !w-6 !h-6"
                  />
                  <span className="text-primary font-zen-maru">
                    キャリア相談の流れ
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
