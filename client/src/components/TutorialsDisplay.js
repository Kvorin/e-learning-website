import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/TutorialsDisplay";
import tutorials from "../utils/tutorials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faClock, faBook } from "@fortawesome/free-solid-svg-icons";

const TutorialsDisplay = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Wrapper>
      {tutorials
        .filter((tutorial) => tutorial.id == id)
        .map((tutorial) => (
          <div key={tutorial.id} className="container">
            <div className="img">
              <iframe
                className="video"
                width="700"
                height="515"
                src={tutorial.video}
              />
            </div>
            <div className="container2">
              <p>{tutorial.desc}</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPen} className="icon" />
                  Created by : {tutorial.author}
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  Time to complete: {tutorial.time} minutes
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} className="icon" />
                  Language: {tutorial.language}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </Wrapper>
  );
};

export default TutorialsDisplay;
