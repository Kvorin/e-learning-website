import styled from "styled-components";

const Wrapper = styled.main`
  .btn {
    margin-left: 10px;
  }
  .logo {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 200px;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h2 {
    font-weight: 700;
    color: var(--text-color);
    span {
      color: var(--second-color);
    }
    font-family: var(--heading-font);
  }
  p {
    color: var(--text-color);
    font-size: 20px;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
