/** @format */

import React from 'react';

// CSS
import './Message.scss';

function Message({ message, timestamp, user, userImage }) {
  //console.log('props: ', message, timestamp, user, userImage);
  return (
    <div className="message" key={timestamp}>
      <img src={userImage} alt="alt" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
