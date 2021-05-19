export function changeLocation(url: string, title = 'About Card', state = {}) {
  window.history.pushState(state, title, url);

  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
}

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
