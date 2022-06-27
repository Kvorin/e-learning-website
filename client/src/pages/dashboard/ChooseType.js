import React from "react";
import types from "../../utils/types";
import Wrapper from "../../assets/wrappers/Type";
import { Link } from "react-router-dom";

const ChooseType = () => {
  return (
    <Wrapper>
      <Link to="tests">
        <img src={types[0].image} alt="test" className="card-img" />
      </Link>
      <Link to="tof">
        <img src={types[1].image} alt="test" className="card-img" />
      </Link>
    </Wrapper>
  );
};

export default ChooseType;
