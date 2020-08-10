import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './MessagesList.css';

function MessagesList({ myUsername }) {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=NqebNLtXsswN');
      setMessages(result.data);
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);
    // Destroy interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const chatContainer = useRef();
  const scrollToMyRef = () => {
    const scroll = chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };
  useEffect(() => {
    scrollToMyRef();
  }, [messages]);

  return (
    <div className="messages-list" ref={chatContainer}>
      <div className="messages-list-container">
        {messages.map(( message => (
          <ChatMessage
            author={message.author}
            key={message._id}
            messageBody={message.message}
            self={message.author === myUsername}
            timestamp={message.timestamp}
          />
        )))}
      </div>
    </div>
  );
}

MessagesList.displayName = 'MessagesList';

MessagesList.propTypes = {
  myUsername: PropTypes.string,
};

export default MessagesList;