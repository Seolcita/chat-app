/** @format */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

//CSS & MUI icons
import { Modal } from '@mui/material';
import { BubbleChart } from '@mui/icons-material';
import './SidebarOption.scss';

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const [openAddChannelModal, setOpenAddChannelModal] = useState(false);
  const [channelName, setChannelName] = useState('');

  const showModal = () => {
    setOpenAddChannelModal(true);
  };

  const addChannel = (e) => {
    e.preventDefault();

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
    setOpenAddChannelModal(false);
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
    <>
      <div
        className="sidebarOption"
        onClick={addChannelOption ? showModal : selectChannel}
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
      <Modal
        open={openAddChannelModal}
        onClose={(e) => setOpenAddChannelModal(false)}
        className="modal"
      >
        <div className="addChannel">
          <div className="addChannel__container">
            <form>
              <h1 className="addChannel__title">
                Please enter the channel name
              </h1>
              <input
                className="addChannel__input"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
              <button
                type="submit"
                className="addChannel__btn"
                onClick={(e) => addChannel(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SidebarOption;
