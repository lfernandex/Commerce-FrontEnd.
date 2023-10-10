import { useEffect, useState } from "react";
import editIcon from "../../../assets/Pen.svg";
import deleteIcon from "../../../assets/Trash.svg";
import ButtonNextPage from "../../../components/ButtonNextPage";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import { findPageRequest } from "../../../services/ProductService";
import "./styles.css";

type QueryParams = {
    page: number;
    name: string;
}


export default function ProductListing() {

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
                <section id="product-listing-section" className="fb-container">

                    <h2 className="fb-section-title">Cadastro de produtos</h2>

                    <div className="fb-btn-page-container fb-mt20 fb-mb20">
                        <div className="fb-btn-next-page">
                            Novo
                        </div>
                    </div>

                    <SearchBar onSearch={handleSearch} />

                    <table className="fb-table fb-mb20 fb-mt20">
                        <thead>
                            <tr>
                                <th className="fb-tb576">ID</th>
                                <th></th>
                                <th className="fb-tb768">Preço</th>
                                <th>Nome</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td className="fb-tb576">{product.id}</td>
                                        <td><img className="fb-product-image-listing" src={product.imgUrl} alt={product.name} /></td>
                                        <td className="fb-tb768">R$: {product.price}</td>
                                        <td>{product.name}</td>
                                        <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                        <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    {
                        !isLastPage &&
                        <ButtonNextPage onNextPage={handleNextPageClick} />
                    }
                    
                </section>
            </main>
        </>
    );

}