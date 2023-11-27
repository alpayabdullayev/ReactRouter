import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Cards() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const data = await fetch("http://localhost:3000/products");
    const res = await data.json();
    setProducts(res);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="div">
            <Link to={`/product/${item.id}`} className="cardLinks">
              Detail
            </Link>
            </div>
            <h1>{item.category}</h1>
            <p>{item.color}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
