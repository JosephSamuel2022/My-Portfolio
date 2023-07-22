import React, { useState } from 'react';
import './Email.css';

const Email = () => {

  const myemail='josephsamuelm2021@gmail.com'

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMail = () => {
    const emailAddress = email;
    const subject = `Interested in working together - ${name}`;
    const body = message;
    const mailtoLink = `mailto:${myemail}?from=${encodeURIComponent(emailAddress)}&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };


  return (
    <div id="contact" className="email-container">
      <h2 className="email-heading">
      <span className="orange-text">INTERESTED IN WORKING </span><span className="white-text">TOGETHER</span><span className='orange-text'> ?</span>
      </h2>
          <div className="text-box">
          <div className="field-wrapper">
        <input
          type="text"
          placeholder="How can I call you?"
            className="input-field"
            value={name}
            onChange={handleNameChange}
        />
        <div className="underline"></div>
          </div>
          
          <div className="field-wrapper">
        <input
          type="email"
          placeholder="Your Email Address?"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
        />
        <div className="underline"></div>
              </div>
      </div>
      
      <div className="text-area">
    <textarea
    placeholder="Type Message..."
          className="input-area"
          value={message}
          onChange={handleMessageChange}
        >
  </textarea>
      </div>
      <button className="send-mail-button" onClick={handleSendMail}>Send Mail</button>

    </div>
  );
};

export default Email;
