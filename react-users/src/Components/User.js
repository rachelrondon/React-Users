import React, { Component } from 'react';

const User = ({ data }) => {

    return(
      <div>
      {data.map((user) =>
        <div className="table content">
          <div className="row first">{user.name}</div>
          <div className="row">{user.email}</div>
          <div className="row">{user.address.city}</div>
          <div className="row">{user.company.name}</div>
        </div>
      )}
      </div>
    )
}

export default User;
