import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { useAppContext } from "../context/appContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import links from "../utils/links.js";
import { SecondLogo } from "../components";
import menu from "../assets/images/menu.png";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, currentUser } = useAppContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("email");
  };

  async function handleLogout() {
    setError("");
    try {
      await logoutUser();
      removeUserFromLocalStorage();
    } catch (error) {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (!currentUser) {
      setTimeout(() => {
        navigate("/landing");
      }, 3000);
    }
  }, [currentUser, navigate]);

  return (
    <Wrapper>
      <nav className="navbar-items">
        <SecondLogo />
        <div className="menu-icon">
          <button
            className="menu"
            onClick={() => setCheck((prevCheck) => !prevCheck)}
          >
            <img src={menu} alt="img" className="burger" />
          </button>
        </div>
        <ul className={check ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => {
            const { text, path, id, cName } = link;

            return (
              <li key={id}>
                <Link to={link.path} className={link.cName}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button className="dropdown-btn btn" onClick={handleLogout}>
            logout
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
