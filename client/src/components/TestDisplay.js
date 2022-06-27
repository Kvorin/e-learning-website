import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/TestDisplay";
import tests from "../utils/tests";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const TestDisplay = () => {
  const { id } = useParams();
  const { score, setScore, gameState, setGameState, message, setMessage } =
    useAppContext();
  const [optionChosen, setOptionChosen] = useState("");
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let index = 0;
  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    tests
      .filter((test) => test.id == id)
      .map((test) => {
        if (test.questions[currentQuestion].answer == optionChosen) {
          setScore(score + 1);
        }
      });
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    tests
      .filter((test) => test.id == id)
      .map((test) => {
        if (test.questions[currentQuestion].answer == optionChosen) {
          setScore(score + 1);
        }
      });
    if (score == 0) {
      setMessage("You are so bad");
    } else if (score >= 1 && score <= 5) {
      setMessage("Good luck next time");
    } else if (score >= 6) {
      setMessage("You are on fire boy!!!");
    }
  };

  return (
    <Wrapper>
      {tests
        .filter((test) => test.id == id)
        .map((test) => (
          <div key={test.id} className="quiz-container">
            <div className="quiz-header">
              <h4>{test.questions[currentQuestion].prompt}</h4>

              <button
                className="button"
                onClick={() => {
                  chooseOption("optionA");
                }}
              >
                {test.questions[currentQuestion].optionA}
              </button>
              <button
                className="button"
                onClick={() => {
                  chooseOption("optionB");
                }}
              >
                {test.questions[currentQuestion].optionB}
              </button>
              <button
                className="button"
                onClick={() => {
                  chooseOption("optionC");
                }}
              >
                {test.questions[currentQuestion].optionC}
              </button>
              <button
                className="button"
                onClick={() => {
                  chooseOption("optionD");
                }}
              >
                {test.questions[currentQuestion].optionD}
              </button>

              {currentQuestion == test.questions.length - 1 ? (
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

export default TestDisplay;
