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
      targets: innerContainer,
      scaleY: config.card.height / window.innerHeight,
      scaleX: config.card.width / window.innerWidth,
      scaleZ: 1,
      duration: 2 * timing,
    })

    .add(
      {
        targets: outerContainer,
        rotateZ: '-90deg',
        scaleZ: 1,
        duration: 2 * timing,
      },
      0,
    )
    .add(
      {
        targets: cardContainer,
        rotateZ: ['180deg', '90deg'],
        scaleZ: 1,
        duration: 2 * timing,
      },
      0,
    )

    // Starts together
    .add(
      {
        targets: outerContainer,
        rotateZ: ['-90deg', '-180deg'],
        rotateY: '180deg',
        scaleZ: 1,
        duration: 2 * timing,
      },
      2 * timing,
    )
    .add(
      {
        targets: cardContainer,
        rotateZ: ['90deg', '0deg'],
        rotateY: ['180deg', '0deg'],
        scaleZ: 1,
        duration: 2 * timing,
      },
      2 * timing,
    );

  if (reversed) {
    timeline.reverse();
    timeline.seek(timeline.duration);
  }

  if (seek !== undefined) {
    console.log('seel', seek);
    timeline.seek(seek);
  }

  return timeline;
}
