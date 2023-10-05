import { useState } from "react";
import { Link } from "react-router-dom";
import { OrderDTO } from "../../../models/order";
import { clearCart, decreaseItem, getCart, increaseItem } from "../../../services/CartService";
import "./styles.css";


export default function ProductCart() {

    const [cart, setCart] = useState<OrderDTO>(getCart());

    function handleClearClick(){
        clearCart();
        setCart(getCart());
    }

    function handleIncreaseItem(productId: number){
        increaseItem(productId);
        setCart(getCart());
    }

    function handleDecreaseItem(productId: number){
        decreaseItem(productId);   
        setCart(getCart());
    }

    return (

        <main>
            <section id="cart-container-section" className="product-container">
                {
                    cart.items.length === 0
                        ? (
                            <div>
                                <h2 className="commerce-section-title mb20">Seu carrinho está vazio</h2>
                            </div>
                        ) :

                        <div className="commerce-card mb20">

                            {
                                cart.items.map(item => (
                                    <div key={item.productId} className="dsc-cart-item-container line-bottom">
                                        <div className="dsc-cart-item-left">
                                            <img className="product-image" src={item.imgUrl} alt={item.name} />
                                            <div className="dsc-cart-item-description">
                                                <h3>{item.name}</h3>
                                                <div className="dsc-cart-item-quantity-container">
                                                    <div onClick={() => handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                                                    <p>{item.quantity}</p>
                                                    <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dsc-cart-item-right">
                                            <h3> R$: {(item.subTotal).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="dsc-cart-total-container">
                                <h3>R$ {cart.total.toFixed(2)}</h3>
                            </div>
                        </div>

                }
                <div className="btn-page-container">
                    <div className="btn btn-blue">
                        Finalizar pedido
                    </div>
                    <Link to="/product-catalog">
                        <div className="btn btn-white">
                            Continuar comprando
                        </div>
                    </Link>
                    <div onClick={handleClearClick} className="btn btn-white">
                        Limpar Carrinho
                    </div>
                </div>
            </section>
        </main>
    );
}