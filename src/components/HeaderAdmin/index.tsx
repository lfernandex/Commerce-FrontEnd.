import homeIcon from "../../assets/inicio.svg";
import productsIcon from "../../assets/product.svg";
import "./styles.css";

export default function HeaderAdmin() {

  return (
    <>
      <header className="fb-nav-container">
        <nav className="fb-nav-main">
          <h1>Commerce Admin</h1>
          <div className="fb-navbar-rigth">
            <div className="fb-menu-items-container">

              <div className="fb-menu-items">
                <img src={homeIcon} alt="Home"/>
                  <p>Inicio</p>
              </div>

              <div className="fb-menu-items">
                <img src={productsIcon} alt="Cadastro"/>
                  <p className="fb-menu-items-active">Produtos</p>
              </div>

            </div>
            <a href="#">Sair</a>
          </div>
        </nav>
      </header>
    </>
  );
}