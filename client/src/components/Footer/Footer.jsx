import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";

const FooterNew = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const guestLinks = (
    <Row>
      <Col>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </Col>
    </Row>
  );

  const authLinks = (
    <a href="" onClick={() => dispatch(logoutUser())} className="nav-link">
      {/* Hello {user.name} */} Logout
    </a>
  );

  return (
    <div className="footer p-5 text-center text-white">
      <div>{isAuthenticated ? authLinks : guestLinks}</div>
      <p id="footer-text">
        Copyright © 2023 Learnesta.com All rights reserved.
      </p>
    </div>
  );
};

export default FooterNew;
