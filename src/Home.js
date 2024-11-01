import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://i0.wp.com/www.magetop.com/blog/wp-content/uploads/2019/12/Top-10-eCommerce-Websites.png?w=740&ssl=1"
            alt="home-image"
          />
        </div>
        <div className="home_row">
          <Product
            id="234"
            image="https://m.media-amazon.com/images/I/61+E2IwH01L._SX679_.jpg"
            price={189}
            rating={4}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
          <Product
            id="256"
            image="https://m.media-amazon.com/images/I/61REk4NspTL._SX679_.jpg"
            price={189}
            rating={3}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
        </div>

        <div className="home_row">
          <Product
            id="123"
            image="https://m.media-amazon.com/images/I/41DT1ACOcZL._SX300_SY300_QL70_FMwebp_.jpg"
            price={189}
            rating={3}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
          <Product
            id="156"
            image="https://m.media-amazon.com/images/I/61fdCt7yW7L._SX679_.jpg"
            price={189}
            rating={4}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
          <Product
            id="456"
            image="https://m.media-amazon.com/images/I/61zwayqiUBL._AC_UL480_FMwebp_QL65_.jpg"
            price={189}
            rating={3}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
        </div>
        <div className="home_row">
          <Product
            id="789"
            image="https://m.media-amazon.com/images/I/714VwSOoCyL._AC_UL480_FMwebp_QL65_.jpg"
            price={189}
            rating={2}
            titile="Amazon-Flameless-Candles-Controller-Acrylic"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
