import { useState } from 'react';
import Button from '../common/Button';
import FormField from '../common/FormField';

import './LoginPage.css';
import { login } from './service';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const handleChangeUsername = event => setUsername(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const resetError = () => setError(null);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            resetError();
            setIsFetching(true);
            await login({ username, password });
            onLogin();
        } catch ( error ) {
            setError(error);
            setIsFetching(false);
        }
    };

    const isButtonEnabled = () => username && password && !isFetching;

    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Login to React-no-pop</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    type="text"
                    name="username"
                    label="phone, email or username"
                    className="loginForm-field"
                    onChange={handleChangeUsername}
                    value={username}
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
                    type="text"
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