import './App.css';
import ButtonInverse from './components/ButtonInverse';
import ButtonPrimary from './components/ButtonPrimary';
import HeaderClient from './components/HeaderClient';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="product-section" className="product-container">

          <ProductCard />

          <div className="btn-page-container">
            <ButtonInverse />
            <ButtonPrimary />
          </div>

        </section>
      </main>
    </>
  );
}