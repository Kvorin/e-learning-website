import styled from "styled-components";
const Wrapper = styled.main`
  display: flex;
  padding: 0 10px;
  min-height: 100vh;
  background: #0d6efd;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 715px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
  }
  .wrapper header {
    font-size: 22px;
    font-weight: 600;
    padding: 20px 30px;
    border-bottom: 1px solid #ccc;
  }
  .wrapper form {
    margin: 35px 30px;
  }
  .wrapper form.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
  form .dbl-field {
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
  }
  .dbl-field .field {
    height: 50px;
    display: flex;
    position: relative;
    width: calc(100% / 2 - 13px);
  }
  .wrapper form i {
    position: absolute;
    top: 50%;
    left: 18px;
    color: #ccc;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
  }
  form .field input,
  form .message textarea {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 18px 0 48px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .field input::placeholder,
  .message textarea::placeholder {
    color: #ccc;
  }
  .field input:focus,
  .message textarea:focus {
    padding-left: 47px;
    border: 2px solid #0d6efd;
  }
  .field input:focus ~ i,
  .message textarea:focus ~ i {
    color: #0d6efd;
  }
  form .message {
    position: relative;
  }
  form .message i {
    top: 30px;
    font-size: 20px;
  }
  form .message textarea {
    min-height: 130px;
    max-height: 230px;
    max-width: 100%;
    min-width: 100%;
    padding: 15px 20px 0 48px;
  }
  form .message textarea::-webkit-scrollbar {
    width: 0px;
  }
  .message textarea:focus {
    padding-top: 14px;
  }
  form .button-area {
    margin: 25px 0;
    display: flex;
    align-items: center;
  }
  .button-area button {
    color: #fff;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    padding: 13px 25px;
    background: #0d6efd;
    transition: background 0.3s ease;
  }
  .button-area button:hover {
    background: #025ce3;
  }
  .button-area span {
    font-size: 17px;
    margin-left: 30px;
    display: none;
  }
  @media (max-width: 600px) {
    .wrapper header {
      text-align: center;
    }
    .wrapper form {
      margin: 35px 20px;
    }
    form .dbl-field {
      flex-direction: column;
      margin-bottom: 0px;
    }
    form .dbl-field .field {
      width: 100%;
      height: 45px;
      margin-bottom: 20px;
    }
    form .message textarea {
      resize: none;
    }
    form .button-area {
      margin-top: 20px;
      flex-direction: column;
    }
    .button-area button {
      width: 100%;
      padding: 11px 0;
      font-size: 16px;
    }
    .button-area span {
      margin: 20px 0 0;
      text-align: center;
    }
  }
`;
export default Wrapper;
