import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import './ChatMessage.css';

function ChatMessage({ author, messageBody, self, timestamp }) {

  return (
    <div className="chat-message">
      <div className={`chat-message-wrapper ${self ? 'own' : ''}`}>
        <div className="chat-message-author">
          {self ? '' : author}
        </div>
        <div className="chat-message-message-body">
          {messageBody}
        </div>
        <div className="chat-message-message-time">
          {moment(timestamp).format("DD MMM YYYY hh:mm")}
        </div>
      </div>
    </div>
  );
}

ChatMessage.displayName = 'ChatMessage';

ChatMessage.propTypes = {
  author: PropTypes.string,
  messageBody: PropTypes.string,
  self: PropTypes.bool,
  timestamp: PropTypes.number,
};

export default ChatMessage;
