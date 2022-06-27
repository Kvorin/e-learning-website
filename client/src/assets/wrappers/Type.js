import styled from "styled-components";

const Wrapper = styled.main`
  margin: 2rem;
  display: flex;
  justify-content: center;

  .card-img {
    margin: 20px;
    transition: all 0.3s ease 0s;
  }
  .card-img:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: translateY(-7px);
  }
`;
export default Wrapper;
