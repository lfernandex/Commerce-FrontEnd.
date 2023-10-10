import { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/carrinho.svg";
import { ContextCartCount } from "../../utils/contextCart";
import "./styles.css";

export function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

    return (
        <>
            <Link to="/product-cart">
                <img src={cartIcon} alt="Carrinho de compras" />
            </Link>

            {
                contextCartCount > 0 &&
                <div className="fb-cart-count">{contextCartCount}</div>
            }
        </>

    );
} 