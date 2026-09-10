import { Link, useLocation } from 'react-router-dom';
import { routeInfo } from '../routeInfo';

/** A reliable parent link, including for visitors arriving at a deep URL. */
export default function BackButton() {
  const { pathname } = useLocation();
  const route = routeInfo[pathname.toLowerCase()];
  return (
    <Link className="back-link" to={route?.parent ?? '/portfolio'}>
      <span aria-hidden="true">←</span>
      {route?.parentLabel ?? 'The work'}
    </Link>
  );
}
