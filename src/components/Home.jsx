import React from "react";

import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, sort, byFastDelivery, byRating, searchQuary },
  } = CartState();

  const TransformProducts = () => {
    let sortProducts = products;
    if (sort) {
      sortProducts = sortProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortProducts = sortProducts.filter((pod) => pod.inStock);
    }

    if (byFastDelivery) {
      sortProducts = sortProducts.filter((pod) => pod.fastDelivery);
    }
    if (byRating) {
      sortProducts = sortProducts.filter((pod) => pod.rating >= byRating);
    }
    if (searchQuary) {
      sortProducts = sortProducts.filter((pod) =>
        pod.name.toLowerCase().includes(searchQuary)
      );
    }

    return sortProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {TransformProducts().map((pod) => {
          return <SingleProducts pod={pod} key={pod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
