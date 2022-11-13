// import TweetsPage from './components/tweets/TweetsPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import ProductsPage from './components/productPage/ProductsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { logout } from './components/auth/service';

import LoginState from './components/auth/LoginState'
import Layout from './components/layout/Layout';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    logout();
    setIsLogged(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/login" 
          element={
            <LoginPage onLogin={handleLogin} />
          } 
        />

        <Route
          path="/products"
          element={
            <LoginState isLogged={isLogged}>
              <ProductsPage onLogout={handleLogout} />
            </LoginState>
          }
        />
      
        <Route
          path="/products/:id"
          element={
            <LoginState isLogged={isLogged}>
              <ProductsPage onLogout={handleLogout} />
            </LoginState>
          }
        />
        <Route
          path="/products/new"
          element={
            <LoginState isLogged={isLogged}>
              <ProductsPage onLogout={handleLogout} />
            </LoginState>
          }
        />
        <Route path="/" element={<Navigate to="/products" />} />

        <Route
          path="/404"
          element={
            <div>
              <Layout>
                <div className="not-found">
                  <p>Not fount 404</p>
                </div>
              </Layout>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
