import { AnimeTimelineInstance } from 'animejs';
import clamp from 'lodash/clamp';
import { useEffect, useRef } from 'react';

import { useWindowSize } from '../../utils';
import { createCardPageTransition } from '../../utils/animations';
import { Card } from '../Card';
import { Page } from '../Page';

interface IProps {
  currentRoute: 'Card_Route' | 'About_Route';
}

let hasMounted = false;
let timeline: AnimeTimelineInstance;
let lastPosition = 0;
let isReversed = false;
let currentSeek = 0;

export default function Main({ currentRoute }: IProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    timeline = createCardPageTransition(pageRef, cardRef);

    if (!hasMounted) {
      isReversed = currentRoute === 'Card_Route';
      lastPosition = 0;
    }

    if (isReversed) {
      timeline.reverse();
    }

    timeline.seek(lastPosition || (isReversed ? timeline.duration : 0));

    return () => {
      lastPosition = timeline.currentTime;
      isReversed = timeline.reversed;

      timeline.restart();
    };
  }, [windowSize]);

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
      timeline.play();
    }
  }, [currentRoute]);

  return (
    <main
      className="main"
      role="presentation"
      onWheel={({ deltaY }) => {
        currentSeek += (deltaY < 0 ? -1 : 1) * 50;

        currentSeek = clamp(currentSeek, 0, timeline.duration);

        if (currentSeek > 400 && timeline.paused) {
          timeline.play();
        } else if (timeline.paused) {
          timeline.seek(currentSeek);
        }
      }}
      onClick={() => {
        if (timeline.paused) {
          if (timeline.completed) {
            timeline.reverse();
          }

          timeline.play();
        } else {
          timeline.reverse();
        }

        const url = window.location.pathname === '/about' ? '/' : '/about';

        window.history.pushState({}, 'About Card', url);

        const popStateEvent = new PopStateEvent('popstate', { state: {} });
        dispatchEvent(popStateEvent);
        timeline.complete = undefined;
      }}
    >
      <Card ref={cardRef} />
      <Page ref={pageRef} />
    </main>
  );
}
