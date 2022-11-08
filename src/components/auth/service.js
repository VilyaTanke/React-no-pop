import client, { setTokenAuthority } from '../../api/client';
import storage from '../../utils/storage';

export const login = credentials => {
    return client.post('/auth/login', credentials).then(({ accessToken }) => {
        setTokenAuthority(accessToken);
        storage.set('auth', accessToken);
    });
};