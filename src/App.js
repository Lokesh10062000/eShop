import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
