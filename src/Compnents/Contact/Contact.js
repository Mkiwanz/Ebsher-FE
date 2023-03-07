import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSenderNameChange = (e) => {
    setSenderName(e.target.value);
  };

  const handleSenderEmailChange = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendEmail = () => {
    const emailMessage = {
      senderName: senderName,
      senderEmail: senderEmail,
      subject: subject,
      message: message,
    };
    axios
      .post("api/v1/emails", emailMessage)
      .then((res) => {
        alert("Email Sent, Thanks!");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: 3 }}
          >
            Contact
          </h6>
          <h1 className="font-secondary display-4">Get In Touch</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="col-sm-6 control-group">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                      onChange={handleSenderNameChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="col-sm-6 control-group">
                    <input
                      type="email"
                      className="form-control bg-secondary border-0 py-4 px-3"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                      onChange={handleSenderEmailChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 py-4 px-3"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                    onChange={handleSubjectChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control bg-secondary border-0 py-2 px-3"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    onChange={handleMessageChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-primary font-weight-bold py-3 px-5 text-white"
                    // type="submit"
                    id="sendMessageButton"
                    onClick={handleSendEmail}
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
