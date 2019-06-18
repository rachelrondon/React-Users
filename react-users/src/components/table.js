import React, { Component } from 'react';
import User from './user';
import '../App.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
        isLoading: false,
        index: 0
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((data, index) => {
        this.setState({
          data: data,
          isLoading: true,
          index: 0
        })
      })
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  componentWillUnmount = () => {
    this.setState({
      isLoading: false
    })
  }

  renderData = () => {
    this.state.data.forEach((user) =>
      <User
        key={user.id}
        name={user.name}
        email={user.email}
        city={user.address.city}
        company={user.company.name}
      />
    )
  }

  render() {

    return (
      <div className="the-table">
       {this.renderData()}
      </div>
    );
  }

}

export default Table;
