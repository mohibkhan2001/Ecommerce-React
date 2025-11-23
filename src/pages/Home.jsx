import React from "react";
import Hero from "../components/Home Page/Hero";
import Home_Category from "../components/Home Page/Home_Category";
import Footer from "../components/Home Page/Footer";

const Home = () => {
  // example id sets for the two sections; tweak IDs to your preference
  const topSellersIds = [95, 91, 99, 180, 173];
  const mensCollectionIds = [95, 97, 86, 84, 88];
  const womensCollectionIds = [184, 187, 186, 177, 179];
  const HomeLifestyleIds = [44, 12, 47, 56, 66];
  const BeautyCareIds = [3, 4, 119, 7, 9];
  const TrendingElectronicsIds = [123, 133, 160, 80, 78];
  const SportsIds = [149, 153, 147, 140, 150];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Home_Category SectionTitle="Top Sellers" ids={topSellersIds} />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category
        SectionTitle={`Men's Collection`}
        ids={mensCollectionIds}
      />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category
        SectionTitle={`Women's Collection`}
        ids={womensCollectionIds}
      />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category SectionTitle={`Home & Lifestyle`} ids={HomeLifestyleIds} />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category SectionTitle={`Beauty & Care`} ids={BeautyCareIds} />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category
        SectionTitle={`Trending Electronics`}
        ids={TrendingElectronicsIds}
      />
      <div className="w-full bg-emerald-900 h-2"></div>
      <Home_Category SectionTitle={`Sports`} ids={SportsIds} />
      <Footer/>
    </div>
  );
};

export default Home;
