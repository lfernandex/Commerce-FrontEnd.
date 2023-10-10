import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../services/AuthService";

type Props = {
    children: JSX.Element;
}

export function PrivateRoute({ children }: Props) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}