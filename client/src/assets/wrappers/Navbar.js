import styled from "styled-components";

const Wrapper = styled.nav`
  .logo {
    max-width: 150px;
    justify-self: center;
    margin-left: 20px;
    cursor: pointer;
  }
  .navbar-items {
    background-color: white;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    width: 70vw;
    justify-content: end;
    text-align: center;
    margin-right: 2rem;
  }
  .nav-links {
    color: black;
    padding: 0.5rem 1rem;
  }
  .nav-links:hover {
    background: var(--primary-600);
    box-shadow: var(--shadow-3);
  }
  .nav-links:focus {
    background-color: var(--primary-600);
    color: white;
  }
  .menu {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
  .menu-icon {
    display: none;
  }
  .burger {
    max-width: 30px;
  }

  @media screen and (max-width: 960px) {
    .navbar-items {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background-color: white;
      left: 0;
      opacity: 1;
      transform: all 0.5s ease;
      z-index: 1;
    }
    .nav-links {
      text-align: center;
      padding: 4.2rem;
      width: 100%;
      display: table;
    }
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 10%);
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  }
`;
export default Wrapper;
