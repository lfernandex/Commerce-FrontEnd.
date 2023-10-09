import { useState } from "react";
import { CredentialsDTO } from "../../../models/auth";
import { loginRequest } from "../../../services/authService";
import "./styles.css";

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: "",
        password: ""
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest(formData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("Erro no login: ", error)
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
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
                                    <input
                                        name="username"
                                        value={formData.username}
                                        className="fb-form-control"
                                        type="text"
                                        placeholder="Email"
                                        onChange={handleInputChange}
                                    />
                                    <div className="fb-form-error"></div>
                                </div>
                                <div>
                                    <input
                                        name="password"
                                        value={formData.password}
                                        className="fb-form-control"
                                        type="password"
                                        placeholder="Senha"
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