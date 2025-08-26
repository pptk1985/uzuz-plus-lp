'use client';

import { useEffect, useState } from 'react';
import type { FC } from 'react';
import Header from '../Header';
import SectionContainer, { Section } from '../SectionContainer';
import DotNavigation from '../DotNavigation';
import FixedBtn from '../FixedBtn';

import SampleFont from '@/components/samplefont/SampleFont';

const sectionComponents: Section[] = [
  { id: 'samplefont', component: SampleFont },
];

const FullPageClient: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false); // ✅ 初期化状態

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const index = sectionComponents.findIndex((s) => s.id === hash);
    if (index >= 0) {
      setCurrentIndex(index);
    }
    setInitialized(true); // ✅ 初期化完了後にスクロール許可
  }, []);

  return (
    <>
      <Header setIndex={setCurrentIndex} />
      <DotNavigation
        sections={sectionComponents.map((s) => s.id)}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      />
      {initialized && (
        <SectionContainer
          sectionComponents={sectionComponents}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      <FixedBtn setIndex={setCurrentIndex} />
    </>
  );
};

export default FullPageClient;
