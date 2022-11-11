import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getIdProduct, deleteProduct } from './service';
import './ProductPage.css';
import Spinner from '../common/spinner/Spinner';
import ErrorAlert from '../common/error/ErrorAlert';
import Button from '../common/Button';
import OkScreen from '../common/OkScreen/OkScreen';
import ModelProduct from './ModelProduct';

const ProductPage = () => {
    const { id } = useParams();

    const [product, setAd] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = () => setConfirm(true)

    const deletedProduct = async () => {
        try {
            setIsFetching(true);
        
            deleteProduct(id);
            
            setIsDeleted(true);
        
            setTimeout(() => {
                navigate('/')
            }, 500);
        } catch (err) {
            setError(err);
        }
      };
    
    const resetError = () => setError(null);

    useEffect(() => {
        const getProduct = async (id) => {
            try {
                resetError();
                const data = await getIdProduct(id);
                setAd(data);
            } catch (err) {
                if (err.status === 404) {
                    navigate('404');
                }
                setError(err);
            }
        };
        getProduct(id);
    }, [id, navigate]);

    return (
        <div className='product_page'>
            {product ? (
                <div key={product.id} className="ProductCont">
                    <ModelProduct product={product} />
                    {!isDeleted && !confirm && (<Button variant='primary' onClick={handleConfirm}>Borrar Producto</Button>)}
                    {confirm && !isDeleted && <OkScreen children='Seguro que desea eliminar el producto?' OkValue={deletedProduct} NotValue={()=> setConfirm(false)}></OkScreen>}
                </div>
            ) : ( <Spinner/> )};

            {error && <ErrorAlert error={error} resetError={resetError} />}
            {isFetching && (
                <div>
                    <Spinner/>
                    <h1>Producto Borrado</h1>
                </div>
            )};
        </div>
    );
};

export default ProductPage;
