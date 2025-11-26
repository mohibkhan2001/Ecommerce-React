import React from "react";
import Home_product_cards from "./Home_product_cards";
import { useTopProducts } from "../../hooks/useTopProducts";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Home_Category = ({ SectionTitle, ids }) => {
  const handleProductClick = (id) => {
    console.log("Clicked product ID:", id);
    // You can navigate or open modal here
  };

  // pass ids through to the hook so each Home_Category can fetch a different set
  const { products = [], loading, error } = useTopProducts(ids);

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
    <div className="w-full select-none py-20 px-20 flex flex-col gap-14 bg-red-100 relative">
      {SectionTitle !== "Top Sellers" && (
        <button className="bg-emerald-950 px-4 py-2 rounded-full text-white absolute right-8 flex justify-center items-center gap-4 cursor-pointer hover:bg-emerald-900 transition-all">
          <span>Shop now</span>
          <FaArrowAltCircleRight />
        </button>
      )}

      <h1 className="Heading text-5xl font-extrabold p-2 text-emerald-950  text-center">
        {SectionTitle}
      </h1>

      <div className="flex gap-4 justify-around items-center flex-wrap">
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
