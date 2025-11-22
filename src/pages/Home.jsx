import React from "react";
import Hero from "../components/Home Page/Hero";
import Home_Category from "../components/Home Page/Home_Category";

const Home = (props) => {
  console.log(props.title)
  return (
    <div>
      <Hero/>
      <Home_Category SectionTitle='Top Sellers'/>
    </div>
  );
};

export default Home;
