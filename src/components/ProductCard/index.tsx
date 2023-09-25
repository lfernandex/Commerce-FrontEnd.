import { ProductDTO } from '../../models/product';
import ProductCategory from '../ProductCategory';
import './styles.css';

type Props = {
  product: ProductDTO;
}

export default function ProductCard({ product }: Props) {

  return (
    <>
      <div className="commerce-card mb20">
        <div className="product-image line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>

        <div className="product-description">
          <h3>R$ {product.price.toFixed(2)}</h3>
          <h4>{product.name}</h4>
          <p>{product.description}</p>

          <div className="product-category-container">

            {
              product.categories.map(item => (
                <ProductCategory key={item.id} name={item.name} />
              ))
            }

          </div>

        </div>
      </div>
    </>
  );
};