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

describe('<Users />', () => {
  it('renders <User /> component', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper.find(User)).to.have.length(1);
  })

  it('renders a div', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Users />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
  });
});
