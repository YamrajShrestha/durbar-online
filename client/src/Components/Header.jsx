import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Detail from "../Pages/Detail";

const Header = () => {
  return (
    <>
      <header className="container py-4">
        <div className="row">
          <div className="col-lg-2">
            <Link to="/">
              <div className="logo">
                <img src="/src/assets/logo1.webp" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="I am shopping for..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-2 d-flex align-items-center">
            <i className="fa-solid fa-arrow-right-arrow-left me-3"></i>
            <div>
              <i className="fa-solid fa-heart me-3" />
              <i className="fa-solid fa-bell" />
            </div>
          </div>
          <div className="col-lg-2">
            <ul className="d-flex align-items-center gap-3">
              <li>
                <a href="">
                  <i className="fa-regular fa-user"></i>
                </a>
              </li>
              <li>
                <a href="">Login</a>
              </li>{" "}
              |
              <li>
                <a href="">Registration</a>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:cid" element={<Category />} />
          <Route path="/detail/:did" element={<Detail />} />
        </Routes>
      </header>
    </>
  );
};

export default Header;
