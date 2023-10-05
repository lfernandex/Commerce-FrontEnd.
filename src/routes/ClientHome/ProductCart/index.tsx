import "./styles.css";


const cart = {
    items: [
        {
            productId: 4,
            quantity: 1,
            name: "PC Gamer",
            price: 1200,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
        },
        {
            productId: 5,
            quantity: 2,
            name: "Rails for Dummies",
            price: 100.99,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
        }
    ]
}

export default function ProductCart() {

    return (

        <main>
            <section id="cart-container-section" className="product-container">
                <div className="commerce-card mb20">

                    {
                        cart.items.map(item => (
                            <div key ={item.productId} className="dsc-cart-item-container line-bottom">
                                <div className="dsc-cart-item-left">
                                    <img className="product-image" src={item.imgUrl} alt={item.name} />
                                    <div className="dsc-cart-item-description">
                                        <h3>{item.name}</h3>
                                        <div className="dsc-cart-item-quantity-container">
                                            <div className="dsc-cart-item-quantity-btn">-</div>
                                            <p>{item.quantity}</p>
                                            <div className="dsc-cart-item-quantity-btn">+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsc-cart-item-right">
                                    <h3> R$: {(item.price * item.quantity).toFixed(2)}</h3>
                                </div>
                            </div>
                        ))
                    }


                    <div className="dsc-cart-total-container">
                        <h3>R$ 15000,00</h3>
                    </div>
                </div>
                <div className="btn-page-container">
                    <div className="btn btn-blue">
                        Finalizar pedido
                    </div>
                    <div className="btn btn-white">
                        Continuar comprando
                    </div>
                </div>
            </section>
        </main>
    );
}