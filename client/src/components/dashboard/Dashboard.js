import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../../OpenContext';
import AddButton from '../AddButton/AddButton';
import FeedButton from '../FeedButton';

function Dashboard() {
  const { setOpen } = useContext(OpenContext);

  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <AddButton handleClick={setOpen} text="Add a cat" />
      <FeedButton />
      {/* <Link to="/cats">My Cats</Link>
      <Link to="/chats">My chats</Link> */}
    </div>
  );
}

export default Dashboard;
