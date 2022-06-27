import React from "react";
import Wrapper from "../assets/wrappers/ContactPage";
const ContactPage = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <header>Send us a Message</header>
        <form action="#">
          <div className="dbl-field">
            <div className="field">
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            <div className="field">
              <input type="text" name="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="dbl-field">
            <div className="field">
              <input type="text" name="phone" placeholder="Enter your phone" />
            </div>
            <div className="field">
              <input
                type="text"
                name="website"
                placeholder="Enter your website"
              />
            </div>
          </div>
          <div className="message">
            <textarea
              placeholder="Write your message"
              name="message"
            ></textarea>
          </div>
          <div className="button-area">
            <button type="submit" className="btn btn-hero button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
