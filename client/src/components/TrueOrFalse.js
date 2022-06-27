import React, { useState } from "react";
import trueFalse from "../utils/trueOrFalse";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/TestDisplay";

const TrueOrFalse = () => {
  const {
    score,
    setScore,
    gameState,
    setGameState,
    message,
    setMessage,
    secondScore,
    setSecondScore,
  } = useAppContext();

  const [optionChosen, setOptionChosen] = useState("");
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id } = useParams();

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    trueFalse
      .filter((tof) => tof.id == id)
      .map((tof) => {
        if (tof.questions[currentQuestion].answer == optionChosen) {
          setSecondScore(secondScore + 1);
        }
      });
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    trueFalse
      .filter((tof) => tof.id == id)
      .map((tof) => {
        if (tof.questions[currentQuestion].answer == optionChosen) {
          setSecondScore(secondScore + 1);
        }
      });
    if (secondScore == 0) {
      setMessage("You are so bad");
    } else if (secondScore >= 1 && secondScore <= 5) {
      setMessage("Good luck next time");
    } else if (secondScore >= 6) {
      setMessage("You are on fire boy!!!");
    }
  };

  return (
    <Wrapper>
      {trueFalse
        .filter((tof) => tof.id == id)
        .map((tof) => (
          <div key={tof.id} className="quiz-container">
            <div className="quiz-header">
              <h4>{tof.questions[currentQuestion].prompt}</h4>

              <button
                className="button"
                onClick={() => {
                  chooseOption("optionA");
                }}
              >
                {tof.questions[currentQuestion].optionA}
              </button>
              <button
                className="button"
                onClick={() => {
                  chooseOption("optionB");
                }}
              >
                {tof.questions[currentQuestion].optionB}
              </button>

              {currentQuestion == tof.questions.length - 1 ? (
                <Link
                  to="results"
                  className="btn btn-hero q"
                  onClick={finishQuiz}
                >
                  check the result
                </Link>
              ) : (
                <button
                  className="btn btn-hero q"
                  onClick={nextQuestion}
                  id="nextQuestion"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        ))}
    </Wrapper>
  );
};

export default TrueOrFalse;
