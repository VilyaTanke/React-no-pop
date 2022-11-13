import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import FormField from '../common/FormField';
// import { useAuth } from './context';

import './LoginPage.css';
import { login } from './service';

import { ReactComponent as Icon } from '../../assets/LOGOReactNoPop.svg';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const { handleLogin } = useAuth();

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const resetError = () => setError(null);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            resetError();
            setIsFetching(true);
            await login({ email, password });
            // handleLogin();
            // const to = location.state?.from?.pathname || '/';
            // navigate(to, { replace: true });
        } catch ( error ) {
            setError(error);
            setIsFetching(false);
        }
    };

    const isButtonEnabled = () => email && password && !isFetching;

    // const isButtonEnabled = useMemo(() => {
    //     return username && password && !isFetching;
    //   }, [username, password, isFetching]);

    return (
        <div className="loginPage">
            <h1 className="loginPage-title">
                <Icon width="100" height="100"/>
                Login to React-no-pop
            </h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    type="text"
                    name="username"
                    label="email"
                    className="loginForm-field"
                    onChange={handleChangeEmail}
                    value={email}
                />
                <FormField
                    type="password"
                    name="password"
                    label="password"
                    className="loginForm-field"
                    onChange={handleChangePassword}
                    value={password}
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="loginForm-field"
                    disabled={!isButtonEnabled()}
                >
                Log in
                </Button>
            </form>
            {error && (
                <div onClick={resetError} className="loginPage-error">{error.message}</div>
            )}
        </div>
    );
};

export default LoginPage;