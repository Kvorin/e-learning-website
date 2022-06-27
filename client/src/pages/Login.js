import Wrapper from "../assets/wrappers/Login";
import { useState, useRef, useEffect } from "react";
import { SecondLogo } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, loginUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const addEmailToLocalStorage = () => {
    localStorage.setItem("email", emailRef.current.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await loginUser(emailRef.current.value, passwordRef.current.value);
      addEmailToLocalStorage();
    } catch (error) {
      setError("failed to sign in");
    }
    setLoading(false);
  }

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

        <button disabled={loading} type="submit" className="btn btn-block">
          submit
        </button>
        <p>or</p>
        <Link to="/register" className="btn btn-block" disabled={loading}>
          Register
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;
