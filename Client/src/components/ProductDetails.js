import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const proid = useParams();

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button className="btn btn-outline-primary my-5">{cartBtn}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
