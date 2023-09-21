import './App.css';
import carrinhoImg from './assets/carrinho.svg';
import notebookImg from './assets/notebook.jpg';

function App() {
  return (
    <>
      <header className="nav-container">
        <nav className="nav-main">
          <h1>Commerce</h1>
          <div className="commerce-menu-items-container">

            <div className="commerce-menu-items">
              <img src={carrinhoImg} alt="Carrinho de compras"/>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-section" className="product-container">
          <div className="commerce-card mb20">
            <div className="product-image line-bottom">
              <img src={notebookImg} alt="notebook"/>
            </div>
            <div className="product-description">
              <h3>R$: 5000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, elit, sed do
                eiusmod tempor incididun ut labore et dolore magna aliqua. Ut
                enimad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occeacat cupidatat non proibident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.F
              </p>
              <div className="product-category-container">
                <div className="product-category">
                  Eletronicos
                </div>
                <div className="product-category">
                  Computadores
                </div>
              </div>
            </div>
          </div>

          <div className="btn-page-container">
            <div className="btn btn-blue">
              Comprar
            </div>

            <div className="btn btn-white">
              Inicio
            </div>
          </div>

        </section>

      </main>
    </>

  );
}

export default App
