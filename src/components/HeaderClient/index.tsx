
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/carrinho.svg';

export default function HeaderClient() {

  return (
    <>
      <header className="nav-container">
        <nav className="nav-main">
          <Link to="/">
            <h1>Commerce</h1>
          </Link>

          <div className="commerce-menu-items-container">

            <div className="commerce-menu-items">
              <Link to="/cart">
              <img src={cartIcon} alt="Carrinho de compras" />
              </Link>
              
            </div>

            <Link to="/login">
              Entrar
            </Link>

          </div>
        </nav>
      </header>
    </>
  );
}