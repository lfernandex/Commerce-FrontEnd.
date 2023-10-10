import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/inicio.svg";
import productIcon from "../../assets/product.svg";
import LoggedUser from "../LoggedUser";

export default function HeaderAdmin() {

  return (
    <>
      <header className="fb-nav-container">
        <nav className="fb-nav-main">
          <h1>Commerce</h1>
          <div className="fb-navbar-rigth">
            <div className="fb-menu-items-container">

              <NavLink
                to="/admin/home"
                className={({isActive}) => isActive ? "fb-menu-items-active" : ""}>
                <div className="fb-menu-items">
                  <img src={homeIcon} alt="Home" />
                  <p>Inicio</p>
                </div>
              </NavLink>


              <NavLink
                to="/admin/products"
                className={({isActive}) => isActive ? "fb-menu-items-active" : ""}>
                <div className="fb-menu-items">
                  <img src={productIcon} alt="Cadastro" />
                  <p>Produtos</p>
                </div>
              </NavLink>

            </div>
            <LoggedUser />
          </div>
        </nav>
      </header >
    </>
  );
}