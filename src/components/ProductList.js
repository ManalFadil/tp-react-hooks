import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import useProductSearch from '../hooks/useProductSearch';

const ProductList = () => {
  const { language } = useContext(LanguageContext);  
  const { products, loading, error } = useProductSearch();

  const translations = {
    fr: {
      loading: "Chargement...",
      error: "Erreur :",
      price: "Prix :",
      noResults: "Aucun produit trouvé."
    },
    en: {
      loading: "Loading...",
      error: "Error:",
      price: "Price:",
      noResults: "No products found."
    }
  };
  
  const currentTranslations = translations[language];
  
  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">{currentTranslations.loading}</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      {currentTranslations.error} {error}
    </div>
  );
  
  if (products.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        {currentTranslations.noResults}
      </div>
    );
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className={`card h-100`}>
              {product.thumbnail && (
                <img 
                  src={product.thumbnail} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{currentTranslations.price}</strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
