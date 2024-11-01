import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, price, rating, titile }) {
  //console.log(id);

  const [state, dispath] = useStateValue();
  //console.log(state);
  const addToBasket = () => {
    //console.log("dispath");
    dispath({
      type: "AD_TO_BASKET",
      item: {
        id: id,
        titile: titile,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{titile}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="shooe" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}
export default Product;
