import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import ClientHome from './routes/ClientHome';
import Login from './routes/ClientHome/Login';
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
              <Route path="login" element={<Login />} />
            </Route>
            
            <Route path="/admin/" element={<Admin/>}>
              <Route index element={<AdminHome/>}/>
              
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ContextCartCount.Provider>
  
  );
}