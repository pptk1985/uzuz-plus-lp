'use client';

import { useEffect, useRef, useCallback } from 'react';
import { scroller } from 'react-scroll';
import type { FC } from 'react';

export type Section = {
  id: string;
  component: FC<{ setIndex?: (index: number) => void }>;
};

type Props = {
  sectionComponents: Section[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

const SectionContainer: FC<Props> = ({
  sectionComponents,
  currentIndex,
  setCurrentIndex,
}) => {
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const targetId = sectionComponents[index].id;

      scroller.scrollTo(targetId, {
        duration: 500,
        smooth: true,
      });

      window.location.hash = targetId;

      // 強制補正（ズレ対策）
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          window.scrollTo({ top: el.offsetTop, behavior: 'auto' });
        }
        isScrolling.current = false;
      }, 300);
    },
    [sectionComponents]
  );

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // ダイアログが開いている場合はスクロール制御を無効化
      if (document.body.style.overflow === 'hidden') {
        return;
      }

      e.preventDefault(); // スクロール割り込み防止
      if (isScrolling.current) return;

      // Macのトラックパッド対策：スクロール量の閾値を設定
      const scrollThreshold = 50; // この値を調整して感度を制御

      if (Math.abs(e.deltaY) < scrollThreshold) return;

      if (e.deltaY > 0 && currentIndex < sectionComponents.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      // ダイアログが開いている場合はタッチ制御を無効化
      if (document.body.style.overflow === 'hidden') {
        return;
      }

      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // ダイアログが開いている場合はタッチ制御を無効化
      if (document.body.style.overflow === 'hidden') {
        return;
      }

      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - endY;
      const deltaX = touchStartX.current - endX;

      // 横スワイプ無視
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;

      // 最低スワイプ距離（誤作動防止）
      if (Math.abs(deltaY) < 80 || isScrolling.current) return;

      if (deltaY > 0 && currentIndex < sectionComponents.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

    // iOSなどのバウンス・スクロール抑制
    const preventDefault = (e: TouchEvent) => {
      // ダイアログが開いている場合は制御を無効化
      if (document.body.style.overflow === 'hidden') {
        return;
      }

      if (e.cancelable) e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', preventDefault);
    };
  }, [currentIndex, sectionComponents.length, setCurrentIndex]);

  return (
    <>
      {sectionComponents.map(({ id, component: Component }) => (
        <div key={id}>
          <Component setIndex={setCurrentIndex} />
        </div>
      ))}
    </>
  );
};

export default SectionContainer;
