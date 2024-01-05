import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top border-bottom pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="logo">
                  <img src="/src/assets/logo1.webp" alt="" />
                </div>
                <p className="pt-4 pb-3 fw-bold mb-0">
                  Subscribe to our newsletter for regular updates about Offers,
                  Coupons & more
                </p>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 rounded-0"
                    type="search"
                    placeholder="Your Email Address"
                    aria-label="Search"
                  />
                  {/* <button className="btn btn-outline-light rounded-0 px-5" type="submit">
                    Subscribe
                  </button> */}
                  <button className="sub-btn">Subscribe</button>
                </form>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <p className="text-uppercase mb-2">Follow Us</p>
                <div className="social-icon">
                  <i class="me-3 fa-brands fa-facebook"></i>
                  <i class="me-3 fa-brands fa-twitter"></i>
                  <i class="me-3 fa-brands fa-square-instagram"></i>
                  <i class="me-3 fa-brands fa-youtube"></i>
                  <i class="me-3 fa-brands fa-linkedin"></i>
                </div>
                <p className="text-uppercase pt-4 mb-2">Mobile Apps</p>
                <img
                  width={180}
                  className="me-2"
                  src="/src/assets/play.png"
                  alt=""
                />
                <img
                  width={180}
                  className="me-2"
                  src="/src/assets/app.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-4">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
              <p className="text-uppercase">contact</p>
              <p>
                <span>Address</span>
                <br />
                Kalanki, Kathmandu
              </p>
              <p>
                <span>Phone</span>
                <br />
                9863667252
              </p>
              <p>
                <span>Email</span>
                <br />
                <a className="text-light" href="mailto:durbarmart1@gmail.com">
                  durbarmart1@gmail.com
                </a>
              </p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">my account</p>
              <p>
                <a href="">Login</a>
              </p>
              <p>
                <a href="">Order History</a>
              </p>
              <p>
                <a href="">My Wishlist</a>
              </p>
              <p>
                <a href="">Track Order</a>
              </p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">Seller Zone</p>
              <p>
                Become A Seller
                <span>
                  <a className="text-warning ms-2" href="">
                    Apply Now
                  </a>
                </span>
              </p>
              <p>Login to Seller Panel</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
