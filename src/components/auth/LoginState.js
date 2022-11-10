import { Navigate, useLocation } from 'react-router-dom';

const LoginState = ({ isLogged, children }) => {
    const location = useLocation();
    if (!isLogged) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default LoginState;