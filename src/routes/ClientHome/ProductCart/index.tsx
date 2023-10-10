import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrderDTO } from "../../../models/order";
import { clearCart, decreaseItem, getCart, increaseItem } from "../../../services/CartService";
import { placeOrderRequest } from "../../../services/OrderService";
import { ContextCartCount } from "../../../utils/contextCart";
import "./styles.css";


export default function ProductCart() {

    const navigate = useNavigate();

    const [cart, setCart] = useState<OrderDTO>(getCart());

    const { setContextCartCount } = useContext(ContextCartCount);


    function handleClearClick() {
        clearCart();
        updateCart();
    }

    function handleIncreaseItem(productId: number) {
        increaseItem(productId);
        const newCart = getCart();
        setCart(newCart);
    }

    function handleDecreaseItem(productId: number) {
        decreaseItem(productId);
        updateCart();
    }

    function updateCart() {
        const newCart = getCart();
        setCart(newCart);
        setContextCartCount(newCart.items.length);
    }

    function jandlePlaceOrderClick() {
        placeOrderRequest(cart)
            .then(response => {
                clearCart();
                setContextCartCount(0);
                navigate(`/confirmation/${response.data.id}`)
            })
    }

    return (

        <main>
            <section id="cart-container-section" className="fb-container">
                {
                    cart.items.length === 0
                        ? (
                            <div>
                                <h2 className="fb-section-title fb-mb20">Seu carrinho está vazio</h2>
                            </div>
                        ) :

                        <div className="fb-card fb-mb20">

                            {
                                cart.items.map(item => (
                                    <div key={item.productId} className="fb-cart-item-container fb-line-bottom">
                                        <div className="fb-cart-item-left">
                                            <img className="product-image" src={item.imgUrl} alt={item.name} />
                                            <div className="fb-cart-item-description">
                                                <h3>{item.name}</h3>
                                                <div className="fb-cart-item-quantity-container">
                                                    <div onClick={() => handleDecreaseItem(item.productId)} className="fb-cart-item-quantity-btn">-</div>
                                                    <p>{item.quantity}</p>
                                                    <div onClick={() => handleIncreaseItem(item.productId)} className="fb-cart-item-quantity-btn">+</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fb-cart-item-right">
                                            <h3> R$: {(item.subTotal).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="fb-cart-total-container">
                                <h3>R$ {cart.total.toFixed(2)}</h3>
                            </div>
                        </div>

                }
                <div className="fb-btn-page-container">
                    {
                        cart.items.length > 0 &&
                        <div onClick={jandlePlaceOrderClick} className="fb-btn fb-btn-blue fb-click fb-mt20">
                            Finalizar pedido
                        </div>
                    }

                    <Link to="/product-catalog">
                        <div className="fb-btn fb-btn-white">
                            Continuar comprando
                        </div>
                    </Link>
                    {
                        cart.items.length > 0 &&
                        <div onClick={handleClearClick} className="fb-btn fb-btn-white fb-click">
                            Limpar Carrinho
                        </div>
                    }

                </div>
            </section>
        </main>
    );
}