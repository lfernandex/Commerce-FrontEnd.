import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import ProductCart from './routes/ClientHome/ProductCart';
import ProductCatalog from './routes/ClientHome/ProductCatalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import { ContextCartCount } from './utils/contextCart';


export default function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (

      <ContextCartCount.Provider value= {{contextCartCount, setContextCartCount}}>
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
      </ContextCartCount.Provider>
  
  );
}