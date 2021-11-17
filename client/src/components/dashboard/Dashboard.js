import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../OpenContext';
import AddButton from '../AddButton/AddButton';
import FeedButton from '../FeedButton';
import MyCatsButton from '../MyCatsButton';
import HomeButton from '../HomeButton';
import './Dashboard.css';

function Dashboard() {
  const { setOpen } = useContext(OpenContext);

  return (
    <div className="nav">
      <Link to="/">
        <HomeButton />
      </Link>
      <AddButton handleClick={setOpen} text="Add a cat" />
      <FeedButton />
      <Link to="/cats">
        <MyCatsButton />
      </Link>
      {/* <Link to="/chats">My chats</Link> */}
    </div>
  );
}

export default Dashboard;
