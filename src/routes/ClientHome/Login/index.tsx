import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormIput from "../../../components/FormIput";
import { getAccessTokenPayload, loginRequest, saveAccesToken } from "../../../services/AuthService";
import { ContextToken } from "../../../utils/contextToken";
import "./styles.css";

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);


    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest({ username: formData.username.value, password: formData.password.value })
            .then(response => {
                saveAccesToken(response.data.access_token);
                setContextTokenPayload(getAccessTokenPayload());
                navigate("/product-cart")
            })
            .catch(error => {
                console.log("Erro no login: ", error)
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: { ...formData[name], value: value } })
    }


    return (
        <>
            <main>
                <section id="login-section" className="fb-container">
                    <div className="fb-login-form-container">
                        <form className="fb-card fb-form" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="fb-form-controls-container">
                                <div>
                                    <FormIput
                                        {...formData.username}
                                        className="fb-form-control"
                                        onChange={handleInputChange}
                                    />
                                    <div className="fb-form-error"></div>
                                </div>
                                <div>
                                    <FormIput
                                        {...formData.password}
                                        className="fb-form-control"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="fb-login-form-buttons fb-mt20">
                                <button type="submit" className="fb-btn fb-btn-blue">Entrar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}