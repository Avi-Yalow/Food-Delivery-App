import React, { useState } from "react";
import "./Home.css";
import Header from "../../commponents/Header/Header";
import ExploreMenu from "../../commponents/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../commponents/FoodDisplay/FoodDisplay";
import AppDownload from "../../commponents/AppDownload/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload />
    </div>
  );
};

export default Home;
