import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './SendMessageForm.css';

function SendMessageForm({ myUsername, refresh }) {
  const [message, setMessage] = useState('');
  const handleChange = (e) => setMessage(e.target.value);

  const headers = {
    'Content-Type': 'application/json',
    'token': 'NqebNLtXsswN',
  };

  const postData = {
    "message": message,
    "author": myUsername,
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=NqebNLtXsswN', postData, {
      headers: headers,
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    });

    setMessage('');
  }

  return (
    <div className="send-message">
      <form onSubmit={handleSubmit} className="send-message-form">
        <input
          name=""
          onChange={handleChange}
          placeholder="Message"
          type="text"
          value={message}
        />
        <button
          disabled={false}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

SendMessageForm.displayName = 'SendMessageForm';

SendMessageForm.propTypes = {
  myUsername: PropTypes.string,
};

export default SendMessageForm;