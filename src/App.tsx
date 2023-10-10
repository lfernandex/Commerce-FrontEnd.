import { useEffect, useState } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/indext';
import { AccessTokenPayloadDTO } from './models/auth';
import { getAccessTokenPayload, isAuthenticated } from './services/AuthService';
import { ContextCartCount } from './utils/contextCart';
import { ContextToken } from './utils/contextToken';
import { history } from './utils/history';

import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import ProductForm from './routes/Admin/ProductForm';
import ProductListing from './routes/Admin/ProductListing';
import ClientHome from './routes/ClientHome';
import Confirmation from './routes/ClientHome/Confirmation';
import Login from './routes/ClientHome/Login';
import ProductCart from './routes/ClientHome/ProductCart';
import ProductCatalog from './routes/ClientHome/ProductCatalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import { getCart } from './services/CartService';

export default function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {

    setContextCartCount(getCart().items.length);

    if (isAuthenticated()) {
      const payload = getAccessTokenPayload();
      setContextTokenPayload(payload);
    }

  }, []);
  return (

    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
        <HistoryRouter history={history}>
          <Routes>

            <Route path="/" element={<ClientHome />} >
              <Route index element={<Navigate to="/product-catalog" />} />
              <Route path="product-catalog" element={<ProductCatalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />} />
              <Route path="product-cart" element={<ProductCart />} />
              <Route path="login" element={<Login />} />
              <Route path="confirmation/:orderId" element={<PrivateRoute><Confirmation /></PrivateRoute>} />
            </Route>

            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
              <Route index element={ <Navigate to="/admin/home" />} />
              <Route path="home" element={<AdminHome />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:productId" element={<ProductForm />} />
            </Route>


            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>

  );
}