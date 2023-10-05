import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import { findAll } from '../../../services/ProductService';
import './styles.css';


export default function ProductCatalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);


  useEffect(() => {

   findAll()
    .then(response =>{
      setProducts(response.data.content);
    })

  }, []) 

  return (

    <>
      <main>
        <section id="catalog-section" className="product-container">

          <SearchBar />

          <div className="catalog-cards mb20 mt20">

            {
              products.map(
                product => <CatalogCard key={product.id} product={product} />)
            }

          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}