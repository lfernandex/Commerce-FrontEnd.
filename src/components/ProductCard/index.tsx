import notebookImg from '../../assets/notebook.jpg';
import ProductCategory from '../ProductCategory';
import './styles.css';

export default function ProductCard() {

  return (
    <>
      <div className="commerce-card mb20">
        <div className="product-image line-bottom">
          <img src={notebookImg} alt="notebook" />
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
            <ProductCategory />
            
            <ProductCategory />
          </div>

        </div>
      </div>
    </>
  );
};