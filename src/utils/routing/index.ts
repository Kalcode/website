export function changeLocation(url: string, title = 'About Card', state = {}) {
  window.history.pushState(state, title, url);

  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
}
