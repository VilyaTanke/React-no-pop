// import TweetsPage from './components/tweets/TweetsPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import ProductsPage from './components/productPage/ProductsPage';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="app">
      {isLogged ? (
        <ProductsPage isLogged={isLogged} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
