import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="Checkout_left">
        <img
          className="checkout_add"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6b1fda09fe6565bf.jpeg?q=20"
          alt=""
        />
        <div>
          <h2>Your Shoping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              titile={item.titile}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
