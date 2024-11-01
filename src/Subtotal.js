import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  //console.log(getBasketTotal());
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <div>
                Subtotal of ({basket.length} items):
                <strong>${value ? value : 0}</strong>
              </div>

              <div>
                <small className="subtotal_gift">
                  <input type="checkbox" />
                  this order contains a gift
                </small>
              </div>
              <div>
                <button className="subtotal_button">proceed to checkout</button>
              </div>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
}
export default Subtotal;
