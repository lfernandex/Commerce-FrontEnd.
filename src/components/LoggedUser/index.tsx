import { useContext } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../services/AuthService";
import { ContextToken } from "../../utils/contextToken";

export default function LoggedUser() {

    const { setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        logout();
        setContextTokenPayload(undefined);
    }

    return (

        isAuthenticated()
            ? (
                <div className="login-logout-user">
                    <a onClick={handleLogoutClick} href="#">Sair</a>
                </div>
            )
            : (
                <div className="login-logout-user">
                    <Link to="/login">
                        Entrar
                    </Link>
                </div>

            )
    );
}