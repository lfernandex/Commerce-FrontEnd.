import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import { findPageRequest } from '../../../services/ProductService';
import './styles.css';


export default function ProductCatalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect(() => {

   findPageRequest(0, productName)
    .then(response =>{
      setProducts(response.data.content);
    })

  }, [productName]);

  function handleSearch(searchText: string){
    setProductName(searchText);
  }

  return (

    <>
      <main>
        <section id="catalog-section" className="product-container">

          <SearchBar onSearch={handleSearch}/>

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