import { Navigate } from "react-router-dom";
import { RoleEnum } from "../../models/auth";
import { hasAnyRoles, isAuthenticated } from "../../services/AuthService";

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[];
}
export function PrivateRoute({ children, roles = [] }: Props) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />;
    }
    return children;
}