import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductCard from "../../../components/ProductCard";
import { ProductDTO } from "../../../models/product";
import { findById } from "../../../services/ProductService";

export default function ProductDetails() {

  const params = useParams();

  const naviGate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {

    findById(Number(params.productId))
      .then(response =>{
        console.log(response.data)
        setProduct(response.data);
      })
      .catch(() =>{
        naviGate("/")
      });

  }, []);


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