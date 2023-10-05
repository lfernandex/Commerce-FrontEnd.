import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import ProductCart from './routes/ClientHome/ProductCart';
import ProductCatalog from './routes/ClientHome/ProductCatalog';
import ProductDetails from './routes/ClientHome/ProductDetails';


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />} >
          <Route index element={<ProductCatalog />} />
          <Route path="product-catalog" element={<ProductCatalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="product-cart" element={<ProductCart />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}