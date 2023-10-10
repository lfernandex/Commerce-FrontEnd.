import editIcon from "../../../assets/Pen.svg";
import deleteIcon from "../../../assets/Trash.svg";
import notebookIcon from "../../../assets/notebook.jpg";
import "./styles.css";

export default function ProductListing() {

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
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>
                            <tr>
                                <td className="fb-tb576">341</td>
                                <td><img className="fb-product-image" src={notebookIcon} alt="" /></td>
                                <td className="fb-tb768">R$: 5.000,00</td>
                                <td>Computador Gamer XT Plus Ultra</td>
                                <td><img className="fb-product-listing-btn" src={editIcon} alt="" /></td>
                                <td><img className="fb-product-listing-btn" src={deleteIcon} alt="" /></td>
                            </tr>

                        </tbody>
                    </table>


                    <div className="fb-btn-next-page fb-mt20">Carregar mais</div>
                </section>
            </main>
        </>
    );

}