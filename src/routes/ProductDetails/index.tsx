import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductCard from "../../components/ProductCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO ={
  id: 2,
  name: "Macbook PRO",
  description: "Macbook asfasklahf",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg",
  price: 2500.99,
  categories:[
    {
      id: 2,
      name: "Eletronicos"
    },
    {
      id: 3,
      name: "Computadores"
    }
  ]
}

export default function ProductDetails(){

    return(
        <>
      <HeaderClient />

      <main>
        <section id="product-section" className="product-container">

          <ProductCard product={product}/>

          <div className="btn-page-container">
            <ButtonInverse />
            <ButtonPrimary />
          </div>

        </section>
      </main>
    </>
    );
}