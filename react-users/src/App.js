import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      console.log('this is the data');
      console.log(this.state.data);

      return (
        <div className="container">
          <div className="table header">
            <div className="row first">Name</div>
            <div className="row">Email</div>
            <div className="row">City</div>
            <div className="row">Company</div>
          </div>
          {this.state.data.map((user) =>
            <div className="table content">
              <div className="row first">{user.name}</div>
              <div className="row">{user.email}</div>
              <div className="row">{user.address.city}</div>
              <div className="row">{user.company.name}</div>
            </div>
          )}
        </div>
      );
    }

  }

export default App;
