import { useEffect, useState } from 'react';
import { getProduct } from './service';
import { Link, useNavigate } from 'react-router-dom';
import OkScreen from '../common/OkScreen/OkScreen';
import './ProductsPage.css';
import ErrorAlert from '../common/error/ErrorAlert';
import ModelProduct from './ModelProduct';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [confirm, setConfirm] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getProductList = async () => {
        try {
            const productList = await getProduct();
            setProducts(productList);
        } catch (err) {
            setError(err);
        }
    };

    const resetError = () => setError(null);

    const Create = () => navigate('/ads/new');
    const notValue= () => {
        setConfirm(false);
        navigate('/');
    };

    const message = () => {
        return (
            <div>
                <h2>No hay publicaciones que mostrar</h2>
            </div>
        );
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className='product_page'>
        {products.length < 1 && confirm && (
            <OkScreen confirm={Create} notValue={notValue}>
            {message()}
            </OkScreen>
        )}
        {products.map((product) => (
            <Link to={`/ads/${product.id}`} key={product.id} className='product_cont'>
            <ModelProduct product={product} />
            </Link>
        ))}
        {error && <ErrorAlert error={error} resetError={resetError} />}
        </div>
    );
};

export default ProductsPage;