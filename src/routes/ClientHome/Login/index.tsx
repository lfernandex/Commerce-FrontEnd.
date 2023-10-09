import "./styles.css";

export default function Login() {

    return (
        <>
            <main>
                <section id="login-section" className="fb-container">
                    <div className="fb-login-form-container">
                        <form className="fb-card fb-form">
                            <h2>Login</h2>
                            <div className="fb-form-controls-container">
                                <div>
                                    <input
                                        className="fb-form-control"
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <div className="fb-form-error"></div>
                                </div>
                                <div>
                                    <input
                                        className="fb-form-control"
                                        type="password"
                                        placeholder="Senha"
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