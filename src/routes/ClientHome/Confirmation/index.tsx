import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { OrderDTO } from "../../../models/order";
import { findByIdRequest } from "../../../services/OrderService";
import "./styles.css";

export default function Confirmation() {

    const params = useParams();

    const [order, setOrder] = useState<OrderDTO>();

    useEffect(() => {
        findByIdRequest(Number(params.orderId))
            .then(response => {
                setOrder(response.data);
            })
    }, [])

    return (

        <>
            <main>
                <section id="confirmaction-section" className="fb-container">

                    <div className="fb-card mb20">

                        {
                            order?.items.map(item => (
                                <div key={item.productId} className="fb-cart-item-container fb-line-bottom">
                                    <div className="fb-cart-item-left">
                                        <img className="fb-product-image" src={item.imgUrl} alt={item.name} />
                                        <div className="fb-cart-item-description">
                                            <h3>{item.name}</h3>
                                            <div className="fb-cart-item-quantity-container">
                                                <p>{item.quantity}</p>
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
                            <h3>R$ {order?.total.toFixed(2)}</h3>
                        </div>
                    </div>

                    <div className="fb-confirmation-message fb-mt20 fb-mb20">
                        Pedido realizado! Número {order?.id}
                    </div>
                    <div className="fb-btn-page-container">
                        <Link to="/">
                            <div className="fb-btn fb-btn-white ">
                                Inicio
                            </div>
                        </Link>

                    </div>
                </section>

            </main>
        </>
    );
}