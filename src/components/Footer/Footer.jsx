import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary mt-5 py-4">
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">About Us</h5>
            <p className="text-muted small">
              Your trusted online store for quality products. Shop smart, live
              better.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-muted">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product-list"
                  className="text-decoration-none text-muted"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-decoration-none text-muted"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="text-muted small mb-1">Email: info@store.com</p>
            <p className="text-muted small">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted small mb-0">
              &copy; 2026 Your Store. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
