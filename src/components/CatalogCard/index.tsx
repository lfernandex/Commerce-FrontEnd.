import { Link } from 'react-router-dom';
import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function CatalogCard({ product }: Props) {

    return (
        <Link to={`/product-details/${product.id}`}>
            <div className="fb-card">
                <div className="fb-catalog-card-top fb-line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="fb-catalog-card-bottom">
                    <h3>R$ {product.price.toFixed(2)}</h3>
                    <h4>{product.name}</h4>
                </div>
            </div>
        </Link>
    );
}