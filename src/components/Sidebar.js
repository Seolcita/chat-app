/** @format */

import React, { useState, useEffect } from 'react';
import SidebarOption from './SidebarOption';
import { useStateValue } from '../StateProvider';

// CSS & MUI Icons & Components
import { Avatar } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import './Sidebar.scss';
import db from '../firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <div className="sidebar__info">
          <h2>Babble Babble</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
      </div>
      <div className="sidebar__add-channel">
        <button className="sidebar__add-channel--btn">
          <strong>+</strong> &nbsp;&nbsp;Add Channel
          {/* <SidebarOption Icon={Add} title="Add Channels" addChannelOption /> */}
        </button>
      </div>
      <div className="sidebar__list">
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
