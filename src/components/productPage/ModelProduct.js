import { Fragment } from 'react';

const ModelProduct = ({product}) => {
    return (
        <Fragment>
            <h2>{product.sale ? 'vendo' : 'busco'}</h2>
            <h3>{product.name}</h3>
            <img
                src={product.photo || 'https://cdn-icons-png.flaticon.com/512/3280/3280594.png'}
                alt='foto' width="100" height="100"
            />
            <h3>{product.price}</h3>
            <h6>Categoria</h6>
            <p>
                {product.tags && product.tags.map((tag) => <span key={tag}>{` -${tag}`}</span>)}
            </p>
        </Fragment>
    );
};

export default ModelProduct;