import React from "react";
import Home_product_cards from "./Home_product_cards";
import { useTopProducts } from "../../hooks/useTopProducts";

const Home_Category = ({ SectionTitle }) => {
  const handleProductClick = (id) => {
    console.log("Clicked product ID:", id);
    // You can navigate or open modal here
  };

  const { products = [], loading, error } = useTopProducts();

  if (loading) {
    return (
      <div className="w-full select-none">
        <h1 className="Heading text-5xl font-bold p-2">{SectionTitle}</h1>
        <div className="p-4">Loading top products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full select-none">
        <h1 className="Heading text-5xl font-bold p-2">{SectionTitle}</h1>
        <div className="p-4 text-red-600">Failed to load products.</div>
      </div>
    );
  }

  return (
    <div className="w-full select-none py-20 px-30 flex flex-col gap-14 bg-neutral-50 relative">
      <div className="h-1/2 w-20 rounded-2xl bg-emerald-950 absolute -left-14"></div>
      <div className="h-1/2 w-20 rounded-2xl bg-emerald-950 absolute -right-14"></div>
      <h1 className="Heading text-5xl font-extrabold p-2 text-emerald-950  text-center">
        {SectionTitle}
      </h1>

      <div className="flex gap-8 justify-around flex-wrap">
        {products.map((product, idx) => (
          <Home_product_cards
            key={product.id ?? idx}
            product={product}
            index={idx}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home_Category;
