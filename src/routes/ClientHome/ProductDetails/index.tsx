import { Link, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductCard from "../../../components/ProductCard";
import { findById } from "../../../services/ProductService";

export default function ProductDetails() {

  const params = useParams();

  const product = findById(Number(params.productId));

  return (
    <>
      <main>
        <section id="product-section" className="product-container">
          {
            product &&
            <ProductCard product={product} />
          }

          <div className="btn-page-container">

            <ButtonPrimary text="Comprar" />

            <Link to="/">
              <ButtonInverse text="Inicio" />
            </Link>

          </div>

        </section>
      </main>
    </>
  );
}