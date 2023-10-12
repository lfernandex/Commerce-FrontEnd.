import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormIput from "../../../components/FormIput";
import { findById } from "../../../services/ProductService";
import { update, updateAll } from "../../../utils/forms";
import "./styles.css";

export default function ProductForm() {

    const params = useParams();

    const isEditing = params.productId !== 'create';

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
    })

    useEffect (() => {
        if(isEditing){
            findById(Number(params.productId))
            .then(response =>{
                const newFormData = updateAll(formData, response.data);
                setFormData(newFormData);
            })
        }
    }, [])

    function handleInputChange(event: any) {
        setFormData(update(formData, event.target.name, event.target.value));
    }

    return (
        <>
            <main>
                <section id="product-form-section" className="fb-container">
                    <div className="fb-product-form-container">
                        <form className="fb-card fb-form">
                            <h2>Dados do Produto</h2>
                            <div className="fb-form-controls-container">
                                <div>
                                    <FormIput
                                        {...formData.name}
                                        className="fb-form-control"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <FormIput
                                        {...formData.price}
                                        className="fb-form-control"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <FormIput
                                        {...formData.imgUrl}
                                        className="fb-form-control"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="fb-product-form-buttons">
                                <Link to="/admin/products">
                                    <button type="reset" className="fb-btn fb-btn-white">Cancelar</button>
                                </Link>
                                <Link to="">
                                    <button type="submit" className="fb-btn fb-btn-blue">Salvar</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );

}