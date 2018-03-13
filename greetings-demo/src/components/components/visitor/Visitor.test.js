// shallow test dumb componentes
// mounting test ( full dom rendering) containers and statefull componentes (lifecycles)

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import Visitor from './Visitor';

function setup() {
  const onClick = spy();
  const user = {
      name: 'Guillermo',
      country: 'Arg',
      birthYear: '1990'
  };

  return shallow(<Visitor user={user} onVisitorClick={onClick} />);
}

describe('rendering', () => {

  it('should render one visitor element', () =>{
    const wrapper = setup();
    expect(wrapper.find('.visitor').exists()).toBe(true);
  })

  it('should render visitor data', () => {
    const wrapper = setup();
    
    expect(wrapper.find('.visitor').childAt(0).text()).toBe('Guillermo');
    expect(wrapper.find('.visitor').childAt(2).text()).toBe('Arg');
    expect(wrapper.find('.visitor').childAt(3).text()).toBe('1990');    
  })

  it('should raise event on visitor click', () => {
    // const wrapper = setup();
    
    const onClick = spy();
    const user = {
      name: 'Guillermo',
      country: 'Arg',
      birthYear: '1990'
    };
    const wrapper = shallow(<Visitor user={user} onVisitorClick={onClick} />);
    // const spyOnSubmit = jest.spyOn(wrapper.dive().instance(), 'onVisitorClick');
    wrapper.first().simulate('click');
    expect(onClick.called).toBeTruthy();
  })

})