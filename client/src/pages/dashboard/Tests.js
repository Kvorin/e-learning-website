import React from "react";
import Wrapper from "../../assets/wrappers/Tutorials";
import tests from "../../utils/tests";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Tests = () => {
  const { score, setScore, secondScore, setSecondScore } = useAppContext();
  const handleScore = () => {
    setScore(0);
    setSecondScore(0);
  };

  return (
    <Wrapper>
      {tests.map((test) => (
        <div className="card" key={test.id}>
          <div className="card-body">
            <div className="card-image">
              <img src={test.img} alt="test" className="card-img" />
            </div>
            <div className="card-content">
              <h4 className="card-title">
                {test.name} {test.level} Quiz
              </h4>
            </div>
          </div>
          <Link className="btn" onClick={handleScore} to={`${test.id}`}>
            Take the test!
          </Link>
        </div>
      ))}
    </Wrapper>
  );
};

export default Tests;
