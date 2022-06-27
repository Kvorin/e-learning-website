import React from "react";
import Wrapper from "../assets/wrappers/Landing";
import { MainLogo } from "../components";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <MainLogo />
      </nav>
      <div className="container page">
        <div className="info">
          <h2>
            Join our <span>courses</span> now!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula arcu sed est molestie, euismod volutpat sem placerat.
            Pellentesque sit amet mollis enim.
          </p>
          <Link to="/register" className="btn btn-hero">
            Register
          </Link>
          <Link to="/login" className="btn btn-hero">
            Login
          </Link>
        </div>
        <img src={main} alt="main picture" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
