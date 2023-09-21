
import cartIcon from '../../assets/carrinho.svg';

export default function HeaderClient(){

    return(
        <>
        <header className="nav-container">
        <nav className="nav-main">
          <h1>Commerce</h1>
          <div className="commerce-menu-items-container">

            <div className="commerce-menu-items">
              <img src={cartIcon} alt="Carrinho de compras"/>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
        </>
    );
}