import { ForwardedRef, forwardRef } from 'react';

import config from '../../config.json';

import { SocialIcons } from './SocialIcons';
import styles from './styles.module.css';

// Card
// Uses forward ref to hand back for animation
function Component(_: any, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        ref={ref}
        role="presentation"
        className={styles.container}
        style={{ backfaceVisibility: 'visible' }}
      >
        <div className="py-4 text-center">
          <h2 className="font-bold" style={{ fontSize: '1.35rem' }}>
            {config.name}
          </h2>
          <p className="opacity-80">{config.title}</p>
        </div>
        <p>
          <a href="mailto:davidclausen2051@gmail.com">{config.email}</a>
        </p>
        <SocialIcons />
      </div>
    </div>
  );
}

export const Card = forwardRef<HTMLDivElement>(Component);
