import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

import BgImg from '@/public/images/uzuzplus/about.webp';
import Image from 'next/image';

export default function Nayami() {
  const features = [
    {
      title: '',
      description: '',
      skeleton: <SkeletonTwo />,
      className: 'dark:border-neutral-800',
    },
  ];
  return (
    <div className="relative">
      {/* 上半分：backgroundImageを表示 */}
      <div
        id="nayami"
        className="h-[45dvh] bg-cover bg-center bg-teal-900 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18"
        style={{
          backgroundImage: `url(${BgImg.src})`,
        }}
      >
        <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-center w-full h-full">
            <div className="col-span-2 h-full flex justify-center items-center">
              <h2 className="text-center text-white text-3xl sm:text-6xl font-extrabold">
                こんな悩みを抱えていませんか？
              </h2>
            </div>
            <div className="col-span-2 text-white self-start">
              <ul className="sm:space-y-2 text-base sm:text-xl font-semibold">
                <li>・就職しても長く続かない／働く自信が持てない</li>
                <li>・ITに興味はあるが何から始めれば良いか分からない</li>
                <li>・通所ペースや体調が不安</li>
                <li>・障害者手帳がないけれど利用できるか心配</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 下半分：bg-logo-patternを表示 */}
      <div className="h-[55dvh] bg-brick-cyan px-2 sm:px-20 pb-14 sm:pb-18">
        <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 justify-center items-center w-full h-full">
            <div className="col-span-2 h-full flex justify-center items-start">
              <h3 className="text-center text-slate-900 text-lg sm:text-3xl font-extrabold bg-white px-3 py-2 sm:px-6 sm:py-4 shadow rounded-2xl relative -top-2 sm:-top-4">
                私たちと一緒に、あなたらしい働き方を見つけましょう！
              </h3>
            </div>
            <div className="col-span-2 h-full flex justify-center items-center">
              <div className="flex justify-center items-center h-full max-w-6xl mx-auto relative -top-4 sm:-top-6">
                <div className="rounded-md dark:border-neutral-800">
                  {features.map((feature) => (
                    <FeatureCard
                      key={feature.title}
                      className={feature.className}
                    >
                      {/* <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>
                        {feature.description}
                      </FeatureDescription> */}
                      <div className=" h-full w-full">{feature.skeleton}</div>
                    </FeatureCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden`, className)}>{children}</div>
  );
};

// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className="mx-auto text-left tracking-tight text-black dark:text-white text-xl sm:text-2xl sm:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         'text-sm sm:text-base  text-left mx-auto',
//         'text-neutral-500 text-center font-normal dark:text-neutral-300',
//         'text-left mx-0 sm:text-sm my-2'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

export const SkeletonTwo = () => {
  const images = [
    '/lp/images/uzuzplus/IMG_7663.png',
    '/lp/images/uzuzplus/IMG_2607.png',
    '/lp/images/uzuzplus/IMG_2698.png',
    '/lp/images/uzuzplus/IMG_7555.png',
    '/lp/images/uzuzplus/IMG_7590.png',
    '/lp/images/uzuzplus/IMG_7642.png',
    '/lp/images/uzuzplus/IMG_2637.png',
    '/lp/images/uzuzplus/IMG_2694.png',
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  // 画像を上下半分ずつに分割
  const topImages = images.slice(0, 4);
  const bottomImages = images.slice(4, 8);

  return (
    <div className="relative flex flex-col items-start p-4 gap-6 h-full overflow-hidden">
      {/* 上段の画像（最初の4枚） */}
      <div className="flex flex-row -ml-6">
        {topImages.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={'images-top' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-0 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="uzuzplus images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-22 sm:h-36 sm:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* 下段の画像（残りの4枚） */}
      <div className="flex flex-row -mr-2">
        {bottomImages.map((image, idx) => (
          <motion.div
            key={'images-bottom' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-0 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="uzuzplus images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-22 sm:h-36 sm:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white/50 dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white/50 dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};
