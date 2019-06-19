import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Users from './Components/Users';
import User from './Components/User';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  shallow(<App />);
});

describe('<App />', () => {
  it('renders a div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
  });

  it('renders <Users /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Users)).toHaveLength(1);
  })
});

describe('<Users />', () => {
  it('renders a div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Users />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
  });

  it('renders <User /> component', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper.find(User)).toHaveLength(1);
  })

  it('renders four divs with the class `.row`', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper.find('.row')).toHaveLength(4);
  })
});

describe('<User />', () => {
  it('renders a div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Users />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
  });
});
