import React from 'react';

import './ClubPage.css'
import Header from './Header/Header';
import YourAcc from './YourAcc/YourAcc';
import TopMenu from './TopMenu/TopMenu';
import UserGreeting from './UserGreeting/UserGreeting';
import Contacts from './Contacts/Contacts';
import BottomMenu from './BottomMenu/BottomMenu';

const ClubPage = () => (
  <div className="wrapper">
    <Header />
    <YourAcc />
    <TopMenu />
    <UserGreeting />
    <Contacts />
    <BottomMenu />
    test
  </div>
);

export default ClubPage;
