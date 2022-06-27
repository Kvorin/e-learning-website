import React from "react";
import trueOrFalse from "../utils/trueOrFalse";
import Wrapper from "../assets/wrappers/EndScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faMessage } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/appContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import trueFalse from "../utils/trueOrFalse";

const EndScreenTOF = () => {
  const { id } = useParams();
  let testName = null;
  let testType = null;
  let date = new Date();
  let dateToText = date.toDateString();
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const index = 0;
  const scoreCollectionRef = collection(db, "scoreBoard");

  const {
    score,
    setScore,
    setGameState,
    message,
    setMessage,
    secondScore,
    setSecondScore,
  } = useAppContext();

  const checkTestName = () => {
    if (id == trueFalse[parseInt(id) - 1].id) {
      // testName = tests[parseInt(id) - 1].name;
      testName = trueFalse[parseInt(id) - 1].name;
      testType = trueFalse[parseInt(id) - 1].tip;
      console.log(testName);
    } else {
      console.log(id);
    }
  };

  const submitData = async () => {
    checkTestName();

    await addDoc(scoreCollectionRef, {
      email: email,
      points: secondScore,
      test: testName,
      date: dateToText,
      tip: testType,
    });
  };

  const restartQuiz = () => {
    submitData();
    setSecondScore(0);
    setScore(0);
    setGameState("menu");
  };

  return (
    <Wrapper>
      <div className="endScreen">
        <div className="title">
          <h1>Test Finished</h1>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            {secondScore} / {trueOrFalse[index].questions.length}
          </li>
          <li>
            <FontAwesomeIcon icon={faMessage} className="icon" />
            {message}
          </li>
        </ul>

        <Link to="/types" className="btn btn-hero button" onClick={restartQuiz}>
          go to tests
        </Link>
      </div>
    </Wrapper>
  );
};

export default EndScreenTOF;
