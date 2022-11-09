// import TweetsPage from './components/tweets/TweetsPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="app">
      <LoginPage onLogin={handleLogin} />
      {/* {isLogged ? (
        <TweetsPage isLogged={isLogged} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )} */}
    </div>
  );
}

export default App;
