'use client';

import { useEffect, useState } from 'react';
import type { FC } from 'react';
import Header from '../Header';
import SectionContainer, { Section } from '../SectionContainer';
import DotNavigation from '../DotNavigation';

import HeroSection from './HeroSection';
import RegistrationFormCta from '@/components/RegistrationFormCta';
import SolveProblems from './SolveProblems';
// import WhiteCompany from './WhiteCompany';
import Feedbacks from './Feedbacks';
// import Attractiveness from './Attractiveness';
import Osusume1 from './Osusume1';
import Osusume2 from './Osusume2';
import Companies from './Companies';
import Price from '@/components/Price';
import SupportFlow from '@/components/SupportFlow';
import FAQ from './FAQ';
import About from '@/components/About';

const sectionComponents: Section[] = [
  { id: 'hero', component: HeroSection },
  { id: 'registration', component: RegistrationFormCta },
  { id: 'solve', component: SolveProblems },
  // { id: 'white', component: WhiteCompany },
  { id: 'feedback', component: Feedbacks },
  // { id: 'attractive', component: Attractiveness },
  { id: 'osusume1', component: Osusume1 },
  { id: 'osusume2', component: Osusume2 },
  { id: 'company', component: Companies },
  { id: 'price', component: Price },
  { id: 'flow', component: SupportFlow },
  { id: 'faq', component: FAQ },
  { id: 'about', component: About },
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
    </>
  );
};

export default FullPageClient;
