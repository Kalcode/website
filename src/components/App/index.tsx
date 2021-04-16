import { useLocation } from '../../utils';
import { FourOhFour } from '../FourOhFour';
import Main from '../Main';

export default function App() {
  const currentRoute = useLocation();

  if (currentRoute === '404') {
    return <FourOhFour />;
  }

  return <Main currentRoute={currentRoute} />;
}
