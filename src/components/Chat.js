/** @format */

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Message from './Message';
import ChatInput from './ChatInput';

// CSS & MUI icons
import './Chat.scss';
import './Message.scss';
import { StarBorder, InfoOutlined } from '@mui/icons-material';
import db from '../firebase';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    // db.collection('rooms')
    //   .doc(roomId)
    //   .collection('messages')
    //   .orderBy('timestamp', 'asc')
    //   .onSnapshot((snapshot) =>
    //     setRoomMessages(snapshot.docs.map((doc) => doc.data()))
    //   );

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        // const messageInfo = snapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   message: doc.data(),
        // }));
        // setRoomMessages(messageInfo);

        setRoomMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
            user: doc.data().user,
            userImage: doc.data().userImage,
          }))
          // snapshot.docs.map((doc) =>
          //   console.log('DATA****** ', doc.id, doc.data())
          // );
        );
      });
  }, [roomId]);
  // console.log('Room Name :', roomDetails);
  console.log('Message :', roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <h4 className="chat__channelName">
            <span>#{roomDetails?.name}</span>
            {/* {console.log('name:', roomDetails.name)} */}
            <StarBorder />
          </h4>
        </div>
        <div className="chat__header--right">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {console.log('Message2 :', roomMessages)}
        {console.log('ROOM ID :', roomId)}
        {roomMessages.map(({ message, timestamp, user, userImage, id }) => (
          <Message
            message={message}
            timestamp={timestamp}
            userName={user}
            userImage={userImage}
            messageId={id}
            roomId={roomId}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
