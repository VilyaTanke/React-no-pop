import client, { setTokenAuthority, removeTokenAuthority, } from '../../api/client';
import storage from '../../utils/storage';

export const login = credentials => {
    return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
        setTokenAuthority(accessToken);
        storage.set('auth', accessToken);
    });
};

export const logout = () => {
    return Promise.resolve().then(() => {
        removeTokenAuthority();
        storage.remove('auth');
    })
}