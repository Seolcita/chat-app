/** @format */

import React, { useState } from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

// CSS & MUI Icons
import { Edit, DeleteForever } from '@mui/icons-material';
import { Modal } from '@mui/material';
import './Message.scss';

function Message({
  message,
  timestamp,
  userName,
  userImage,
  messageId,
  roomId,
}) {
  // console.log(
  //   'props: ',
  //   message,
  //   timestamp,
  //   user,
  //   userImage,
  //   messageId,
  //   roomId
  // );
  //  console.log('logged user:', user);

  const [{ user }, dispatch] = useStateValue();
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState('');
  const [edited, setEdited] = useState(false);

  const updateMessage = () => {
    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .doc(messageId)
      .set(
        {
          message: input ? input : message,
        },
        { merge: true }
      );

    setOpenModal(false);
    setEdited(true);
  };

  return (
    <div className="message" key={timestamp}>
      <img src={userImage} alt="alt" />
      <div className="message__info">
        <div className="message__info--top">
          <h4>
            <span className="message__userName">{userName}</span>
            <span className="message__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          {user?.displayName === userName ? (
            <div>
              <Edit className="mui-icon" onClick={(e) => setOpenModal(true)} />
              <DeleteForever
                className="mui-icon"
                onClick={(e) =>
                  db
                    .collection('rooms')
                    .doc(roomId)
                    .collection('messages')
                    .doc(messageId)
                    .delete()
                }
              />
            </div>
          ) : null}
        </div>
        <div className="message__info--bottom">
          <p>
            {message}
            <span>{edited ? '(edited)' : null}</span>
          </p>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={(e) => setOpenModal(false)}
        className="modal"
      >
        <div className="editChatInput">
          <div className="editChatInput__container">
            <form>
              <h1>Edit Your Message</h1>
              <input
                value={input ? input : message}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" onClick={updateMessage}>
                Update
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Message;
