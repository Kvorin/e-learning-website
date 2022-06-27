import styled from "styled-components";

const Wrapper = styled.main`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;

  .card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    background-color: white;
  }
  .type {
    width: 400px;
  }
  .card-content {
    padding: 10px 10px;
    text-align: center;
  }
  .btn {
    margin: 10px 10px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-img {
    width: 100%;
    object-fit: cover;
  }
  img {
    border-radius: 5px 5px 0 0;
  }
  .card-title {
    padding: 0.5rem;
  }
  .card_desc {
    padding: 0 1rem;
  }
`;

export default Wrapper;
