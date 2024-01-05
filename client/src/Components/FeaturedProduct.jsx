import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${props.tt}`)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <>
      <div className="container py-4 featured-products">
        <h4 className="py-3 fw-bold text-uppercase">{props.tt}</h4>
        <div className="row">
          {data.slice(0, 4).map((e) => (
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
      <div className="container pb-4">
        <div className="row">
          {data.slice(16, 19).map((e) => (
            <>
              <div className="col-sm-4">
                <div className="item">
                  <img src={e.thumbnail} className="img-thumbnail" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
