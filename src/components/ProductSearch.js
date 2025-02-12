import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import useDebounce from '../hooks/useDebounce';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
      <p>Recherche (après debounce) : {debouncedSearchTerm}</p>
    </div>
  );
};

export default ProductSearch;
