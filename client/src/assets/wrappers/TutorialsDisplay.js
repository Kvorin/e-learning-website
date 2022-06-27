import styled from "styled-components";
const Wrapper = styled.main`
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: white;

    padding: 2rem;
    overflow: hidden;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  }

  .video {
    width: 100%;
    max-width: 1100px;
    overflow: hidden;
    display: grid;
  }

  .item {
    display: block;
    padding: 10px 15px 10px 1px;
  }

  .icon {
    padding-right: 10px;
  }
  h1 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
  .col_button {
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    background-color: aliceblue;
    color: #000;
    transition: background 0.2s;
  }
  .col_button--active {
    background-color: gold;
  }
`;

export default Wrapper;
