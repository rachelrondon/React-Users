import React from 'react';
import '../App.css';

const User = ({ name, email, city, company }) => {

  return (
    <div className="userInfo">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{city}</h2>
      <h2>{company}</h2>
    </div>
  )
}

export default User;
