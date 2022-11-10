import client from '../../api/client';

const productUrl = '/api/v1/adverts';

export const getLastestProducts = () => {
    const url = productUrl;
    return client.get(url);
};

export const getAds =  async () => {
    const ads = await client.get(productUrl)
    
    return ads;
   
};

export const getAdId = async (adId) => {
    const ad = await client.get(`${productUrl}/${adId}`);

    return ad;
}

export const createAd = async (body) => {
    
    const response = await client.post(productUrl,body);
    
    return response;
};

export const deleteAd = async (adId) => {
    const deletedAd = await client.delete(`${productUrl}/${adId}`);
    
    return deletedAd;
};