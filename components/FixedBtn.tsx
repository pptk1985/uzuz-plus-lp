'use client';

import { FC } from 'react';
import { MessageCirclePlus } from 'lucide-react';

type Props = {
  setIndex: (index: number) => void;
};

const FixedBtn: FC<Props> = ({ setIndex }) => {
  const handleClick = () => {
    // registrationセクションのインデックスを設定（sectionComponentsの配列で1番目）
    setIndex(1);
    window.location.hash = 'registration';
  };

  return (
    <div className="fixed bottom-3 left-4 right-4 sm:left-1/4 sm:right-1/4 z-50">
      <button
        onClick={handleClick}
        className="w-full inline-flex items-center justify-center p-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <span className="drop-shadow-xs font-zen-maru text-base sm:text-2xl">
          無料相談／見学受付中
        </span>
        <MessageCirclePlus className="ml-1" />
      </button>
    </div>
  );
};

export default FixedBtn;
