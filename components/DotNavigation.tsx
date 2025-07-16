'use client';

import type { FC } from 'react';

type Props = {
  sections: string[];
  currentIndex: number;
  setIndex: (index: number) => void;
};

const DotNavigation: FC<Props> = ({ sections, currentIndex, setIndex }) => {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3.5">
      {sections.map((id, i) => (
        <button
          key={id}
          onClick={() => {
            setIndex(i);
            window.location.hash = id;
          }}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            currentIndex === i ? 'bg-blue-500 scale-200' : 'bg-white opacity-80'
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
