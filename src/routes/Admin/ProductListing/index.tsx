import { useEffect, useState } from "react";
import editIcon from "../../../assets/Pen.svg";
import deleteIcon from "../../../assets/Trash.svg";
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

    return (
        <>
            <main>
                <section id="product-listing-section" className="fb-container">

                    <h2 className="fb-section-title">Cadastro de produtos</h2>

                    <div className="fb-btn-page-container fb-mt20">
                        <div className="fb-btn-next-page">
                            Novo
                        </div>
                    </div>

                    <form className="fb-seacrch-bar fb-mt20">
                        <button type="submit">🔎︎</button>
                        <input type="text" placeholder="Nome do produto" />
                        <button type="reset">🗙</button>
                    </form>

                    <table className="fb-table fb-mb20 fb-mt20">
                        <thead>
                            <th className="fb-tb576">ID</th>
                            <th></th>
                            <th className="fb-tb768">Preço</th>
                            <th>Nome</th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr>
                                        <td className="fb-tb576">{product.id}</td>
                                        <td><img className="fb-product-image" src={product.imgUrl} alt={product.name} /></td>
                                        <td className="fb-tb768">R$: {product.price}</td>
                                        <td>{product.name}</td>
                                        <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                        <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                    <div className="fb-btn-next-page fb-mt20">Carregar mais</div>
                </section>
            </main>
        </>
    );

}