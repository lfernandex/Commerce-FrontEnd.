import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import makeAnimated from 'react-select/animated';
import FormIput from "../../../components/FormIput";
import FormSelect from "../../../components/FormSelect";
import FormTextArea from "../../../components/FormTextArea";

import { CategoryDTO } from "../../../models/category";
import { findAllRequest } from "../../../services/CategoryService";
import { findById } from "../../../services/ProductService";
import { dirtyValidate, update, updateAll, updateAndValidate } from "../../../utils/forms";
import { selectStyles } from "../../../utils/select";
import "./styles.css";



export default function ProductForm() {

    const animatedComponents = makeAnimated();

    const params = useParams();

    const isEditing = params.productId !== 'create';

    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Por favor, informe nome de 3 a 80 caracteres."
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Por favor, informe um valor positivo."
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: string) {
                return /^.{10,}$/.test(value);
            },
            message: "A descrição deve ter, no minimo, 10 caracteres."
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (value: CategoryDTO[]) {
                return value.length > 0;
            },
            message: "O produto deve ter ao menos uma categoria"
        }

    })

    useEffect(() => {
        findAllRequest()
            .then(response => {
                setCategories(response.data);
            })
    }, [])

    useEffect(() => {

        if (isEditing) {
            findById(Number(params.productId))
                .then(response => {
                    const newFormData = updateAll(formData, response.data);
                    setFormData(newFormData);
                })
        }
    }, []);

    function handleInputChange(event: any) {
        setFormData(updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleOnTurnDirty(name: string) {
        setFormData(dirtyValidate(formData, name));
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
                                        onTurnDirty={handleOnTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="fb-form-error">
                                        {formData.name.message}
                                    </div>
                                </div>
                                <div>
                                    <FormIput
                                        {...formData.price}
                                        className="fb-form-control"
                                        onTurnDirty={handleOnTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="fb-form-error">
                                        {formData.price.message}
                                    </div>
                                </div>
                                <div>
                                    <FormIput
                                        {...formData.imgUrl}
                                        className="fb-form-control"
                                        onTurnDirty={handleOnTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <FormSelect
                                        {...formData.categories}
                                        className="fb-form-control fb-form-select-container"
                                        styles ={selectStyles}
                                        options={categories}
                                        onChange={(obj: any) => {
                                            const newFormData = update(formData, "categories", obj);
                                            setFormData(newFormData);
                                        }}
                                        onTurnDirty={handleOnTurnDirty}
                                        isMulti
                                        getOptionLabel={(category: CategoryDTO) => category.name}
                                        getOptionValue={(category: CategoryDTO) => String(category.id)}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                    />
                                    <div className="fb-form-error">
                                        {formData.categories.message}
                                    </div>
                                </div>

                                <div>
                                    <FormTextArea
                                        {...formData.description}
                                        className="fb-form-control fb-textarea"
                                        onTurnDirty={handleOnTurnDirty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="fb-form-error">
                                        {formData.description.message}
                                    </div>
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