import { useContext } from "react";
import cartIcon from "../../assets/carrinho.svg";
import { ContextCartCount } from "../../utils/contextCart";
import "./styles.css";

export function CartIcon() {

    const {contextCartCount} = useContext(ContextCartCount);

    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            {
                contextCartCount > 0 &&
                <div className="cart-count">{contextCartCount}</div> 
            }
        </>

    );
}