import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './Contact.css';

function Contact() {

  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setContactName(inputValue);
      } else if (inputType === 'password') {
        setMessage(inputValue); 
      }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !contactName) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    setContactName('');
    setEmail('');
    alert(`Hello ${contactName}`);
  };

  return (
  <div className='contact'>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
  <h1>Contact</h1>
  <p>Thank you for dropping by! Feel free to send a note or inquire for more information about me.</p>
      <form className="form">
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here!"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact; 