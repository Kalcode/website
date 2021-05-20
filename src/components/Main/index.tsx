import { changeLocation } from '../../utils/routing';
import { Card } from '../Card';

export default function Main() {
  return (
    <main
      className="main"
      role="presentation"
      onClick={() => {
        const url = window.location.pathname === '/about' ? '/' : '/about';
        changeLocation(url);
      }}
    >
      <Card />
    </main>
  );
}
