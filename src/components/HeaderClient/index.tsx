
import { Link } from 'react-router-dom';
import { CartIcon } from '../CartIcon';

export default function HeaderClient() {

  return (
    <>
      <header className="nav-container">
        <nav className="nav-main">
          <Link to="/">
            <h1>Commerce</h1>
          </Link>

          <div className="commerce-menu-items-container">

            <Link to="/cart">
              <div className="commerce-menu-items">
                <CartIcon />
              </div>
            </Link>
            <Link to="/login">
              Entrar
            </Link>

          </div>
        </nav>
      </header>
    </>
  );
}