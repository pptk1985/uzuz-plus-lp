'use client';

import { useEffect, useState } from 'react';
import type { FC } from 'react';
import Header from '../Header';
import SectionContainer, { Section } from '../SectionContainer';
import DotNavigation from '../DotNavigation';
import FixedBtn from '../FixedBtn';

import GridLayout1 from '@/components/samplelayout/GridLayout1';
import GridLayout2 from '@/components/samplelayout/GridLayout2';
import GridLayout3 from '@/components/samplelayout/GridLayout3';
import TabLayout1 from '@/components/samplelayout/TabLayout1';
import TabLayout2 from '@/components/samplelayout/TabLayout2';
import GalleryLayout1 from '@/components/samplelayout/GalleryLayout1';
import GalleryLayout2 from '@/components/samplelayout/GalleryLayout2';
import CornerImageLayout1 from '@/components/samplelayout/CornerImageLayout1';
import { Pricing1 } from '@/components/samplelayout/Pricing1_henshutochu';
import { Compare1 } from '@/components/samplelayout/Compare1_henshutochu';
import FAQ1 from '@/components/samplelayout/FAQ1';

const sectionComponents: Section[] = [
  { id: 'gridlayout1', component: GridLayout1 },
  { id: 'gridlayout2', component: GridLayout2 },
  { id: 'gridlayout3', component: GridLayout3 },
  { id: 'tablayout1', component: TabLayout1 },
  { id: 'tablayout2', component: TabLayout2 },
  { id: 'gallerylayout1', component: GalleryLayout1 },
  { id: 'gallerylayout2', component: GalleryLayout2 },
  { id: 'cornerimagelayout1', component: CornerImageLayout1 },
  { id: 'pricing1', component: Pricing1 },
  { id: 'compare1', component: Compare1 },
  { id: 'faq1', component: FAQ1 },
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
