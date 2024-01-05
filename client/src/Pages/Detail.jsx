import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { did } = useParams();
  let [data, setData] = useState([]);
  useEffect((e) => {
    fetch(`https://dummyjson.com/products/${did}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="border-top border-5 border-danger mt-5"></div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <img src={data.thumbnail} alt="" className="w-100" />
          </div>
          <div className="col-lg-6">
            <h3 className="text-uppercase fw-bold">{data.title}</h3>
            <p>
              Category: <span>{data.category}</span>
            </p>
            <p>
              Description: <span>{data.description}</span>
            </p>
            <p>
              Price: <span>{data.price}</span>
            </p>
            <p>
              Stock: <span>{data.stock}</span>
            </p>
            <p>
              Brand: <span>{data.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
