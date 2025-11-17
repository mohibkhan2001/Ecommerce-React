import React, { useCallback, useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";

const App = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllProducts = useCallback(async () =>{
    setLoading(true);
    setError(null);

    try{
      const response = axios.get(API_URL);
      setProducts((await response).data);
      console.log(response);

    }
    catch(error){
      if (error){
        setError("Failed to fetch products. Please try again.");
        console.error(error)
      }
      
    }
    finally{
        setLoading(false);
      }
  }, [API_URL])  
  useEffect(
    function () {
      getAllProducts();
    },
    [getAllProducts]
  );

  return (
    <div>
      <Home products={products} />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-emerald-900 p-5 m-10 text-white disabled:opacity-50"
        onClick={getAllProducts}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get data"}
      </button>
    </div>
  );
};

export default App;
