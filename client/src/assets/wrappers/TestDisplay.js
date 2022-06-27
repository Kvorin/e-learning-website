import styled from "styled-components";
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden;
  margin: 0;

  .quiz-container {
    border-radius: 10px;

    width: 800px;
    overflow: hidden;
  }
  .quiz-header {
    padding: 4rem;
    display: grid;
  }
  h4 {
    padding: 1rem;
    text-align: center;
    margin: 0;
  }
  .button {
    font-size: 1.2rem;
    margin: 1rem 0;
    height: 60px;

    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }
  .button:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  .button:focus {
    background-color: #2ee59d;
  }

  .q {
    margin-top: 10px;
  }
`;

export default Wrapper;
