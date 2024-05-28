import React from 'react';
import './Message.css';

interface Props {
  isFound: boolean;
}

const Message: React.FC<Props> = ({isFound}) => {
  return (
    <div className="message">{isFound ? `You found it!!!` : ''}</div>
  );
};

export default Message;