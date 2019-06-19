import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    constructor(props) {
      super(props);

      this.state = {
          data: [],
          isLoading: false,
          index: 0,
          key: '',
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
            index: 0,
            key: data[0].id
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


    render() {
      return (
        <div className="container">
          <div className="table header">
            <div className="row first">Name</div>
            <div className="row">Email</div>
            <div className="row">City</div>
            <div className="row">Company</div>
          </div>
          <User
            data={this.state.data}
          />
        </div>
      );
    }
  }

export default Users;
