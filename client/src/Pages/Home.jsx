import React from "react";
import CatList from "../Components/CatList";
import FeaturedProduct from "../Components/FeaturedProduct";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <CatList />
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-danger">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-light"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>{" "}
                    <span className="text-light">|</span>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Flash Sale
                      </a>
                    </li>{" "}
                    <span className="text-light">|</span>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Blogs
                      </a>
                    </li>{" "}
                    <span className="text-light">|</span>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        All Brands
                      </a>
                    </li>{" "}
                    <span className="text-light">|</span>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        All categories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/src/assets/sliderImg1.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/sliderImg2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/sliderImg3.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/src/assets/sliderImg4.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <FeaturedProduct tt="smartphones" />
        <FeaturedProduct tt="laptops" />
        <FeaturedProduct tt="fragrances" />
        <FeaturedProduct tt="skincare" />
        <FeaturedProduct tt="groceries" />
        <FeaturedProduct tt="home-decoration" />
        <FeaturedProduct tt="furniture" />
        <FeaturedProduct tt="tops" />
      </div>
    </>
  );
};

export default Home;
