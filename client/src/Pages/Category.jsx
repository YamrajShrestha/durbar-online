import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  let { cid } = useParams();
  let [data, setData] = useState([]);
  useEffect((e) => {
    fetch(`https://dummyjson.com/products/category/${cid}`)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  console.log(data);
  return (
    <>
      <div className="border-top border-5 border-danger mt-5"></div>
      <div className="container py-5">
        <h3 className="text-uppercase py-3 fw-bold">{cid}</h3>
        <div className="row">
          {data.map((e) => (
            <>
              <div className="col-md-3 col-sm-6">
                <div className="product-grid6">
                  <div className="product-image6">
                    <Link to={`/detail/${e.id}`}>
                      <img className="pic-1" src={e.thumbnail} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a href="#">{e.title}</a>
                    </h3>
                    <div className="price">
                      $11.00
                      <span>$14.00</span>
                    </div>
                  </div>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
