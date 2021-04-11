import { AnimeTimelineInstance } from 'animejs';
import clamp from 'lodash/clamp';
import { useCallback, useEffect, useRef, WheelEventHandler } from 'react';

import { useWindowSize } from '../../utils';
import { createCardPageTransition } from '../../utils/animations';
import { Card } from '../Card';
import { Page } from '../Page';

interface IProps {
  currentRoute: Routes;
}

let hasMounted = false;
let timeline: AnimeTimelineInstance;
let lastPosition: number | undefined = undefined;
let isReversed = false;

function changeLocation(url: string, title = 'About Card', state = {}) {
  window.history.pushState(state, title, url);

  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
}

export default function Main({ currentRoute }: IProps) {
  const initialRoute = useRef<Routes>(currentRoute).current;
  const cardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (hasMounted) {
      return;
    }

    isReversed = initialRoute === 'Card_Route';

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
  }, [windowSize, initialRoute]);

  useEffect(() => {
    if (!hasMounted) {
      console.log('skip');
      return;
    }

    console.log(windowSize);
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
    }

    timeline.play();
  }, [currentRoute]);

  const onWheelCallback = useCallback<WheelEventHandler<HTMLElement>>(
    ({ deltaY }) => {
      if (currentRoute === 'About_Route') {
        return;
      }

      const addSubtract = deltaY < 0 ? -1 : 1;
      const { duration, progress } = timeline;
      const amount = 50;
      let newProgress = (progress / 100) * duration + addSubtract * amount;
      newProgress = clamp(newProgress, 0, timeline.duration);

      if (timeline.progress < 80 && timeline.paused) {
        changeLocation('/about');
      } else if (timeline.paused) {
        timeline.seek(newProgress);
      }
    },
    [currentRoute],
  );

  return (
    <main
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
