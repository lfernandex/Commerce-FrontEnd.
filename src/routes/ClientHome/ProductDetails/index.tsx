import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductCard from "../../../components/ProductCard";
import { ProductDTO } from "../../../models/product";
import { addProduct, getCart } from "../../../services/CartService";
import { findById } from "../../../services/ProductService";
import { ContextCartCount } from "../../../utils/contextCart";


export default function ProductDetails() {

  const params = useParams();

  const naviGate = useNavigate();

  const {setContextCartCount} = useContext(ContextCartCount);
  
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {

    findById(Number(params.productId))
      .then(response => {
        console.log(response.data)
        setProduct(response.data);
      })
      .catch(() => {
        naviGate("/")
      });

  }, []);


  function handleByClick() {
    if (product) {
      addProduct(product);
      setContextCartCount(getCart().items.length)

      naviGate("/product-cart")
    }

  }

  return (
    <>
      <main>
        <section id="product-section" className="product-container">
          {
            product &&
            <ProductCard product={product} />
          }

          <div className="btn-page-container">

            <div onClick={handleByClick}>
              <ButtonPrimary text="Comprar" />
            </div>


            <Link to="/">
              <ButtonInverse text="Inicio" />
            </Link>

          </div>

        </section>
      </main>
    </>
  );
}