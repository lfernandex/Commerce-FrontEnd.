import "./styles.css";

export default function ProductForm() {

    return (
        <>
            <main>
                <section id="product-form-section" className="fb-container">
                    <div className="fb-product-form-container">
                        <form className="fb-card fb-form">
                            <h2>Dados do Produto</h2>
                            <div className="fb-form-controls-container">
                                <div>
                                    <input
                                        className="fb-form-control"
                                        type="text"
                                        placeholder="Nome"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="fb-form-control"
                                        type="text"
                                        placeholder="Preço"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="fb-form-control"
                                        type="text"
                                        placeholder="Imagem"
                                    />
                                </div>

                                <div>
                                    <select className="fb-form-control fb-select" required>
                                        <option value="" disabled selected>Categorias</option>
                                        <option value="Valor1">Valor 1</option>
                                        <option value="Valor2">Valor 2</option>
                                    </select>
                                </div>

                                <div>
                                    <textarea className="fb-form-control fb-textarea" placeholder="Descrição"></textarea>
                                </div>
                            </div>


                            <div className="fb-product-form-buttons">
                                <button type="reset" className="fb-btn fb-btn-white">Cancelar</button>
                                <button type="submit" className="fb-btn fb-btn-blue">Salvar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );

}