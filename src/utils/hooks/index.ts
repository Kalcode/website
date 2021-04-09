import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';

import { getLocation } from '..';

export function useWindowSize() {
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

export function useLocation() {
  const [location, setLocation] = useState<
    'Card_Route' | 'About_Route' | '404'
  >(getLocation());

  useEffect(() => {
    function updateLocation() {
      setLocation(getLocation());
    }

    window.addEventListener('popstate', updateLocation);

    return () => {
      window.removeEventListener('popstate', updateLocation);
    };
  }, []);

  return location;
}
