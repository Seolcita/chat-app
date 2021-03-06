/** @format */

import React, { useState } from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';

// CSS & Material UI - Icons/Components
import { Send } from '@mui/icons-material';
import './ChatInput.scss';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput('');
    }
  };

  return (
    <div className="chatInput">
      <div className="chatInput__container">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message#${channelName?.toLowerCase()}`}
          />
          <button type="submit" onClick={sendMessage}>
            <Send className="sendBtn" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;
