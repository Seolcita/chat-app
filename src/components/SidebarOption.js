/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

//CSS & MUI icons
import { BubbleChart } from '@mui/icons-material';
import './SidebarOption.scss';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      // history.push(`/room/${title}`);
      history.push(`/room/${id}`);
      // window.location.href = `/room/${id}`;
    } else {
      history.push(title);
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <BubbleChart />
          <span className="sidebarOption__title">{title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
