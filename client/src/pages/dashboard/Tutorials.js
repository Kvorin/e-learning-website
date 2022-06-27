import React from "react";
import tutorials from "../../utils/tutorials";
import Wrapper from "../../assets/wrappers/Tutorials";
import { Link, Outlet } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Tutorials = () => {
  const { score, setScore, secondScore, setSecondScore } = useAppContext();
  const handleScore = () => {
    setScore(0);
    setSecondScore(0);
  };

  return (
    <Wrapper>
      {tutorials.map((tutorial) => (
        <div className="card" key={tutorial.id}>
          <div className="card-body">
            <div className="card-image">
              <img src={tutorial.img} className="card-img" />
            </div>
            <div className="card-content">
              <h2 className="card-title">{tutorial.name}</h2>
            </div>
          </div>
          <Link className="btn" onClick={handleScore} to={`${tutorial.id}`}>
            Check it out!
          </Link>
        </div>
      ))}
      <Outlet />
    </Wrapper>
  );
};

export default Tutorials;
