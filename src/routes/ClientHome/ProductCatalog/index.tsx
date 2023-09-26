import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import * as productService from '../../../services/ProductService';
import './styles.css';


export default function ProductCatalog() {

  return (

    <>
      <main>
        <section id="catalog-section" className="product-container">

          <SearchBar />

          <div className="catalog-cards mb20 mt20">

            {
              productService.findAll().map(
                product => <CatalogCard key={product.id} product={product} />)
            }

          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}