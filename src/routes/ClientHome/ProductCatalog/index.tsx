import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import { findPageRequest } from '../../../services/ProductService';
import './styles.css';

type QueryParams = {
  page: number;
  name: string;
}

export default function ProductCatalog() {

  const [isLastPage, setIsLastPage] = useState(false);



  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  useEffect(() => {

    findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })

  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (

    <>
      <main>
        <section id="catalog-section" className="fb-container">

          <SearchBar onSearch={handleSearch} />

          <div className="fb-catalog-cards fb-mb20 fb-mt20">

            {
              products.map(
                product => <CatalogCard key={product.id} product={product} />)
            }

          </div>

          {
            !isLastPage&&
            <div onClick={handleNextPageClick}>
              <ButtonNextPage />
            </div>

          }

        </section>
      </main>
    </>
  );
}