import { useEffect, useState } from "react";
import axios from "axios";

const TOP_PRODUCTS_IDS = [95, 91, 99, 180, 173];

export const useTopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requests = TOP_PRODUCTS_IDS.map(id =>
          axios.get(`https://dummyjson.com/products/${id}`)
        );

        const responses = await Promise.all(requests);

        const data = responses.map(res => res.data);

        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
