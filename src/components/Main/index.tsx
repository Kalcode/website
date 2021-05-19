import anime, { AnimeTimelineInstance } from 'animejs';
import clamp from 'lodash/clamp';
import { useCallback, useEffect, useRef, WheelEventHandler } from 'react';

import { useWindowSize } from '../../utils';
import { createCardPageTransition } from '../../utils/animations';
import { changeLocation } from '../../utils/routing';
import { Card } from '../Card';
import { Page } from '../Page';

interface IProps {
  currentRoute: Routes;
}

let hasMounted = false;
let timeline: AnimeTimelineInstance;
let lastPosition: number | undefined = undefined;
let isReversed = false;

export default function Main({ currentRoute }: IProps) {
  const initialRoute = useRef<Routes>(currentRoute).current;
  const mainRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  // On Mount
  useEffect(() => {
    if (hasMounted) {
      return;
    }

    isReversed = initialRoute === 'Card_Route';

    const intro = anime.timeline({ autoplay: false });

    intro.add({
      targets: [mainRef.current, cardRef.current],
      opacity: [0, 1],
      delay: anime.stagger(250),
      duration: 1000 * 10,
      translateY: [40, 0],
    });

    intro.play();

    timeline = createCardPageTransition(
      pageRef,
      cardRef,
      isReversed,
      lastPosition,
    );

    return () => {
      lastPosition = timeline.currentTime;
      isReversed = timeline.reversed;
    };
  }, [initialRoute]);

  // Window Resizing
  useEffect(() => {
    lastPosition = timeline.currentTime;
    isReversed = timeline.reversed;
    const progress = timeline.progress;

    if (!hasMounted) {
      return;
    }

    timeline.restart();
    timeline.pause();

    timeline = createCardPageTransition(
      pageRef,
      cardRef,
      isReversed,
      lastPosition,
    );

    timeline.pause();

    if (progress !== 0 && progress !== 100) {
      timeline.play();
    }
  }, [windowSize]);

  // Route change animation
  useEffect(() => {
    if (!hasMounted || !timeline) {
      hasMounted = true;
      return;
    }

    if (
      (currentRoute === 'Card_Route' && timeline.direction === 'reverse') ||
      (currentRoute === 'About_Route' && timeline.direction === 'normal')
    ) {
      timeline.reverse();
    }

    timeline.play();
  }, [currentRoute]);

  // Event Handler
  const onWheelCallback = useCallback<WheelEventHandler<HTMLElement>>(
    ({ deltaY }) => {
      if (currentRoute === 'About_Route') {
        return;
      }

      const addSubtract = deltaY > 0 ? -1 : 1;
      const { duration, progress } = timeline;
      const amount = 50;

      // When using the scroll wheel to trigger
      // the animation it doesn't aniamte
      // when doing the intro

      let newProgress = (progress / 100) * duration + addSubtract * amount;
      console.log('newProgress', newProgress);
      newProgress = clamp(newProgress, 0, timeline.duration);

      if (timeline.progress < 80 && timeline.paused) {
        changeLocation('/about');
      } else if (timeline.paused) {
        timeline.pause();
        timeline.seek(newProgress);
      } else {
        console.log('seek');
        timeline.seek(newProgress);
      }
    },
    [currentRoute],
  );

  return (
    <main
      ref={mainRef}
      className="main"
      role="presentation"
      onWheel={onWheelCallback}
      onClick={() => {
        const url = window.location.pathname === '/about' ? '/' : '/about';
        changeLocation(url);
      }}
    >
      <Card ref={cardRef} />
      <Page ref={pageRef} />
    </main>
  );
}
