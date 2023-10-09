
import { Link } from 'react-router-dom';
import { CartIcon } from '../CartIcon';
import "./styles.css";

export default function HeaderClient() {

  return (
    <>
      <header className="fb-nav-container">
        <nav className="fb-nav-main">
          <Link to="/">
            <h1>Commerce</h1>
          </Link>

          <div className="fb-menu-items-container">

            <Link to="/cart">
              <div className="fb-menu-items">
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