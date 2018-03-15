import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import moment from 'moment'
import Greeting from './Greeting';

describe('Greeting Component Tests', () => {

  let user, wrapper;

  beforeEach(() => {
    user = { name: 'Maxi', country: 'Argentina', birthDate: '05-31-1991' };
    wrapper = shallow(<Greeting {...user} />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Greeting {...user} /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders 3 spans', () => {
    expect(wrapper.find('span')).toHaveLength(4);
  });

  it('renders name prop', () => {
    expect(wrapper.find('#name').text()).toEqual('Maxi');
  });

  it('renders country prop', () => {
    expect(wrapper.find('#country').text()).toEqual('Argentina');
  });

  it('renders and calculates current age', () => {
    const today = moment();
    const currenteAge = moment().diff(`05-31-1991`, 'years');
    expect(wrapper.find('#age').text()).toBe(`${currenteAge+1}`);
  });

})