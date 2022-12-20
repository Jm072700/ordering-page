import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <Link to={"/"} className="link">
            <li className="nav-item">
              <h5 className="nav-link px-2 text-muted">Home</h5>
            </li>
          </Link>
          <Link to={"/cart"} className="link">
            <li className="nav-item">
              <h5 className="nav-link px-2 text-muted">Items</h5>
            </li>
          </Link>
          <Link to={"/feedback"} className="link">
            <li className="nav-item">
              <h5 className="nav-link px-2 text-muted">Feedback</h5>
            </li>
          </Link>
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </>
  );
};

export default Footer;
