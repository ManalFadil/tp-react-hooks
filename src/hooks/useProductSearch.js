import { useState, useEffect, useRef } from 'react';

const useProductSearch = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMounted = useRef(true); 

  useEffect(() => {
    console.log('Products:', products); 

    const fetchProducts = async () => {
      if (!searchTerm) {
        setProducts([]); 
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://api.daaif.net/products`);
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        if (isMounted.current) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err.message);

        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted.current = false; 
    };
  }, [searchTerm]);
  return { products, loading, error };

};
export default useProductSearch;
