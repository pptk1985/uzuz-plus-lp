'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
  title?: string;
  description?: string;
  fallbackText?: string; // 追加：フォールバックテキスト
  icon?: React.ReactNode; // 追加：アイコン
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-[74dvh] sm:h-[77dvh] p-4 sm:p-10 grid grid-cols-1 md:grid-cols-3  max-w-4xl mx-auto gap-2.5 sm:gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full'
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          'object-cover object-top absolute inset-0 h-full w-full transition duration-200'
        )}
        alt="thumbnail"
      />
      {/* 初期状態のテキスト表示 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 hover:bg-orange-300/25">
        {card.icon && (
          <div className="bg-orange-300 text-white p-1.5 sm:p-2 rounded-lg backdrop-blur-sm mb-1.5 sm:mb-3 animate-pulse">
            <div className="text-white">{card.icon}</div>
          </div>
        )}
        {card.title && (
          <div className="bg-slate-900/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm mb-2">
            <span className="text-sm font-medium">{card.title}</span>
          </div>
        )}
        {card.description && (
          <div className="bg-slate-900/50 text-white px-3 py-1 rounded-lg backdrop-blur-sm">
            <span className="text-xs">{card.description}</span>
          </div>
        )}
        {!card.title && !card.description && card.fallbackText && (
          <div className="bg-slate-900/75 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg backdrop-blur-sm">
            <span className="text-sm sm:text-xl font-bold">
              {card.fallbackText}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      {/* 選択された状態での背景画像 */}
      <motion.img
        layoutId={`image-${selected?.id}-image`}
        src={selected?.thumbnail}
        height="500"
        width="500"
        className="object-cover object-top absolute inset-0 h-full w-full rounded-lg"
        alt="selected thumbnail"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10 rounded-lg"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
