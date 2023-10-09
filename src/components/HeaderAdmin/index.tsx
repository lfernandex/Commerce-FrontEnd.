import homeIcon from "../../assets/inicio.svg";
import productIcon from "../../assets/product.svg";

export default function HeaderAdmin() {

  return (
    <>
      <header className="fb-nav-container">
        <nav className="fb-nav-main">
          <h1>Commerce</h1>
          <div className="fb-navbar-rigth">
            <div className="fb-menu-items-container">

              <div className="fb-menu-items">
                <img src={homeIcon} alt="Home"/>
                  <p>Inicio</p>
              </div>

              <div className="fb-menu-items">
                <img src={productIcon} alt="Cadastro"/>
                  <p className="fb-menu-items-active">Produtos</p>
              </div>

            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
    </>
  );
}