/** @format */

import React from 'react';

// CSS & MUI Components & Icons
import { Avatar } from '@mui/material';
import { AccessTime, Search, HelpOutline } from '@mui/icons-material';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="avatar" src="" />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
