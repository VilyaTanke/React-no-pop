import client from '../../api/client';

const productUrl = '/api/v1/adverts';

export const getLastestProducts = () => {
    const url = productUrl;
    return client.get(url);
};