import Wrapper from "../assets/wrappers/Register";
import { useState, useRef, useEffect } from "react";
import { SecondLogo } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { setupUser, currentUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //adauga valoarea curenta din variabila emailRef in localStorage-ul browser-ului
  const addEmailToLocalStorage = () => {
    localStorage.setItem("email", emailRef.current.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //se verifica daca valorile din cele doua variabile sunt identice
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    //se apeleaza functia setupUser , ce contine ca parametrii cele doua variabile
    try {
      setError("");
      setLoading(true);
      await setupUser(emailRef.current.value, passwordRef.current.value);
      addEmailToLocalStorage();
    } catch (error) {
      setError("failed to create an account");
    }
    setLoading(false);
  }

  //daca exista un user , este redirectionat pe pagina principala
  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [currentUser, navigate]);

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <Link to="/landing">
          <SecondLogo />
        </Link>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            name="email"
            type="email"
            ref={emailRef}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            name="password"
            type="password"
            ref={passwordRef}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password Confirmation
          </label>
          <input
            className="form-input"
            name="passwordConf"
            type="password"
            ref={passwordConfirmRef}
          />
        </div>
        <button disabled={loading} type="submit" className="btn btn-block">
          submit
        </button>
        <p>or</p>
        <Link to="/login" className="btn btn-block" disabled={loading}>
          Login
        </Link>
      </form>
    </Wrapper>
  );
};

export default Register;
