import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import moment from 'moment'

import Greeting from './Greeting';

function setup() {
  const props = {
    name: 'Guille',
    country: 'Arg',
    birthYear: '1990'
  };

  return shallow(<Greeting {...props} />);
}

describe('rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const user = { name: 'Guille', country: 'Arg', birthYear: '1990' };
    ReactDOM.render( <Greeting {...user} /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders name property', () => {
    const wrapper = setup();
    expect(wrapper.find('#name').text()).toEqual('Guille');
  });

  it('renders country property', () => {
    const wrapper = setup();
    expect(wrapper.find('#country').text()).toEqual('Arg');
  });

  it('renders and calculate users age', () => {
    const wrapper = setup();
    const today = moment();
    const bornYear = moment(`01-01-1990`, "MM-DD-YYYY");
    const age = moment.duration(moment().diff(bornYear)).years();

    expect(wrapper.find('#age').text()).toBe(`${age}`);
  });

})