// import TweetsPage from './components/tweets/TweetsPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import ProductsPage from './components/productPage/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { logout } from './components/auth/service';

import LoginState from './components/auth/LoginState'

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
      </Routes>
    </div>
  );
}

export default App;
