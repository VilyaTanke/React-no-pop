import client from '../../api/client';

const productUrl = '/api/v1/adverts';

export const getLastestProducts = () => {
    const url = productUrl;
    return client.get(url);
};

export const getProduct =  async () => {
    const ads = await client.get(productUrl)
    
    return ads;
   
};

export const getIdProduct = async (productId) => {
    const ad = await client.get(`${productUrl}/${productId}`);

    return ad;
}

export const createProduct = async (body) => {
    
    const response = await client.post(productUrl,body);
    
    return response;
};

export const deleteProduct = async (productId) => {
    const deleteProduct = await client.delete(`${productUrl}/${productId}`);
    
    return deleteProduct;
};