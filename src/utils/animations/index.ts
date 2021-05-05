import anime from 'animejs';
import { RefObject } from 'react';

import config from '../../config.json';

const timing = 350;

export function createCardPageTransition(
  pageRef: RefObject<HTMLDivElement>,
  cardRef: RefObject<HTMLDivElement>,
  reversed = false,
  seek?: number,
) {
  const timeline = anime.timeline({ autoplay: false, easing: 'linear' });

  const cardContainer = cardRef.current;
  const innerContainer = pageRef.current?.children[0];
  // const pageContainer = pageRef.current?.children[0]?.children[0];
  const outerContainer = pageRef.current;

  timeline
    .add({
      duration: 2 * timing,
      scaleX: config.card.width / window.innerWidth,
      scaleY: config.card.height / window.innerHeight,
      scaleZ: 1,
      targets: innerContainer,
    })

    .add(
      {
        targets: outerContainer,
        rotateZ: ['0deg', '-90deg'],
        scaleZ: 1,
        duration: 2 * timing,
      },
      0,
    )
    .add(
      {
        duration: 2 * timing,
        rotateZ: ['180deg', '90deg'],
        scaleZ: 1,
        targets: cardContainer,
        translateY: 0,
      },
      0,
    )

    // Starts together
    .add(
      {
        duration: 2 * timing,
        rotateY: ['0deg', '180deg'],
        rotateZ: ['-90deg', '-180deg'],
        scaleZ: 1,
        targets: outerContainer,
      },
      2 * timing,
    )
    .add(
      {
        duration: 2 * timing,
        rotateY: ['180deg', '0deg'],
        rotateZ: ['90deg', '0deg'],
        scaleZ: 1,
        targets: cardContainer,
        translateY: 0,
      },
      2 * timing,
    );

  if (reversed) {
    timeline.reverse();
    timeline.seek(timeline.duration);
  }

  if (seek !== undefined) {
    timeline.seek(seek);
  }

  return timeline;
}
