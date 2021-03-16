import anime, { AnimeTimelineInstance } from 'animejs';
import throttle from 'lodash/throttle';
import { useEffect, useRef, useState } from 'react';

import config from '../../config.json';
import { Card } from '../Card';
import { Page } from '../Page';

let timeline: AnimeTimelineInstance;

const timing = 1000;
// const hasPlayed = false;

let lastPosition = 0;
let isReversed = true;

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeEvent = throttle(() => {
      setSize(window.innerWidth);
    }, 500);

    window.addEventListener('resize', resizeEvent);

    return () => window.removeEventListener('resize', resizeEvent);
  });

  return size;
}

function App() {
  const cardRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    timeline = anime.timeline({ autoplay: false });

    const cardContainer = cardRef.current;
    const innerContainer = pageRef.current?.children[0];
    // const pageContainer = pageRef.current?.children[0]?.children[0];
    const outerContainer = pageRef.current;

    timeline
      .add({
        targets: innerContainer,
        scaleX: config.card.height / window.innerWidth,
        scaleY: config.card.width / window.innerHeight,
        scaleZ: 1,
        duration: 2 * timing,
        easing: 'linear',
      })

      // Starts together
      .add(
        {
          targets: outerContainer,
          rotateZ: '-90deg',
          rotateX: '180deg',
          scaleZ: 1,
          duration: 2 * timing,
          easing: 'linear',
        },
        2 * timing,
      )
      .add(
        {
          targets: cardContainer,
          rotateZ: ['90deg', '0deg'],
          rotateY: ['180deg', '0deg'],
          scaleZ: 1,
          duration: 2 * 1000,
          easing: 'linear',
        },
        2 * timing,
      );

    if (isReversed) {
      console.log('test');
      timeline.reverse();
    }

    timeline.seek(lastPosition || timeline.duration);

    return () => {
      lastPosition = timeline.currentTime;
      isReversed = timeline.reversed;
      // hasPlayed = false;
      timeline.restart();
      timeline.pause();
    };
  }, [windowSize]);

  return (
    <main
      className="main"
      role="presentation"
      onClick={() => {
        if (timeline.paused) {
          if (timeline.completed) {
            timeline.reverse();
          }

          timeline.play();
        } else {
          timeline.reverse();
        }

        // timeline.play();

        // if (hasPlayed) {
        //   timeline.reverse();
        // }
        // hasPlayed = true;
      }}
    >
      <Card ref={cardRef} />
      <Page ref={pageRef} />
    </main>
  );
}

export default App;
