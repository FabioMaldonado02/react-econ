import "./App.css";
import Nav from "../src/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import ProductsList from "../src/components/Products/ProductsList";
import getProductsRequest from "../src/utils/utils";
import { Route, Switch } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    getProductsRequest().then((getApi) => {
      setProducts(getApi);
    });
  }, []);
  return (
    <>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <ProductsList products={products} />}
        />
        <Route path="/products" exact render="" />
        <Route path="/products/:id" exact render="" />
        <Route path="/cart" exact render="" />
        <Route path="/checkout" render="" />
      </Switch>
    </>
  );
};

export default App;
