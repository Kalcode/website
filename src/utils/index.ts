export * from './hooks';

export function getLocation() {
  switch (window.location.pathname) {
    case '/':
      return 'Card_Route';
    case '/about':
      return 'About_Route';
    default:
      return '404';
  }
}
