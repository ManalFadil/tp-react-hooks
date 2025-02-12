import React, { useState } from 'react';
import ProductSearch from './ProductSearch';
import ProductList from './ProductList';
import useProductSearch from '../hooks/useProductSearch';

const ProductContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, loading, error } = useProductSearch(searchTerm);

  return (
    <div>
      <ProductSearch onSearch={setSearchTerm} />
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <ProductList products={products} />
    </div>
  );
};

export default ProductContainer;
