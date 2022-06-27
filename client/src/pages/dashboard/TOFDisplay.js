import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/Tutorials";
import trueFalse from "../../utils/trueOrFalse";

const TOFDisplay = () => {
  const { score, setScore, secondScore, setSecondScore } = useAppContext();
  const handleScore = () => {
    setScore(0);
    setSecondScore(0);
  };

  return (
    <Wrapper>
      {trueFalse.map((tof) => (
        <div className="card" key={tof.id}>
          <div className="card-body">
            <div className="card-image">
              <img src={tof.img} alt="test" className="card-img" />
            </div>
            <div className="card-content">
              <h4 className="card-title">{tof.name} T/F Test</h4>
            </div>
          </div>
          <Link className="btn" onClick={handleScore} to={`${tof.id}`}>
            Take the test!
          </Link>
        </div>
      ))}
      <Outlet />
    </Wrapper>
  );
};

export default TOFDisplay;
