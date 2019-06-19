import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders name title', () => {
  const wrapper = shallow(<App />);
  const name = <div>Name</div>
  expect(wrapper.contains(name)).toEqual(true);
});

it('renders name title', () => {
  const wrapper = shallow(<App />);
  const email = <div>Email</div>
  expect(wrapper.contains(email)).toEqual(true);
});

it('renders name title', () => {
  const wrapper = shallow(<App />);
  const city = <div>City</div>
  expect(wrapper.contains(city)).toEqual(true);
});

it('renders name title', () => {
  const wrapper = shallow(<App />);
  const company = <div>Company</div>
  expect(wrapper.contains(company)).toEqual(true);
});
