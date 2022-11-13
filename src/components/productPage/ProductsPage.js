import { useEffect, useState } from 'react';

import { Link, } from 'react-router-dom';

import './ProductsPage.css';

import ModelProduct from './ModelProduct';
import Filters from './Filters';
import Layout from '../layout/Layout';
import { getLastestProducts } from './service';

const ProductsPage = ({ onLogout }) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);
  
    useEffect(() => {
      const execute = async () => {
        const products = await getLastestProducts();
        setProducts(products);
      };
      execute();
    }, []);
  
    const forSale = (sale) => {
      return sale ? 'Vendo' : 'Compro';
    };
  
    const getProductsFilter = (filters) => {
      setFilters(filters);
    };
  
    let filteredProducts = products;
  
    filteredProducts = products.filter((product) => {
      return (
        !filters.length ||
        ((filters[0] === '' || filters[0] === product.name) &&
          (filters[1] === '' || filters[1] === product.sale) &&
          (filters[2] === 0 || filters[2] <= product.price) &&
          (filters[3] === 0 || filters[3] >= product.price) &&
          (!filters[4].length || JSON.stringify(filters[4]) === JSON.stringify(product.tags)))
      );
    });
  
    return (
      <Layout onLogout={onLogout}>
        <div className="productsPage">
          {products.length ? (
            <div>
              <h1>Lista de anuncios</h1>
              <Filters getProductsFilter={getProductsFilter} />
              <ul>
                {filteredProducts.length === 0 && (
                  <div>
                    No hay anuncios que mostrar. Modifica los filtros o{' '}
                    <Link to="/adverts/new">publica un anuncio.</Link>
                  </div>
                )}
                {products.map((product) => (
                  <li key={product.id}>
                    <Link to={`/ads/${product.id}`} key={product.id} className='product_cont'>
                    <ModelProduct product={product} />
                      <ul className="advert-container">
                        <li>
                          <strong>{product.name}</strong>
                        </li>
                        <li>{forSale(product.sale)}</li>
                        <li>Precio: {product.price}€</li>
                        <li>Tags: {product.tags.join(', ')}</li>
                      </ul>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <Filters />
              No hay anuncios. <Link to="/products/new">¡Publica el primer anuncio!</Link>
            </div>
          )}
        </div>
      </Layout>
    );
  };

export default ProductsPage;