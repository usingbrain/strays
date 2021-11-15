import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <AddButton */}
      <Link to="/cats">My cats</Link>
      <Link to="/chats">My chats</Link>
    </div>
  );
}

export default Dashboard;
