import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import Visitor from './Visitor';

describe('Visitor Component Tests', () => {

  let user, wrapper, onClick;

  beforeEach(() => {
    user = { name: 'Maxi', country: 'Argentina', birthDate: '05-31-1991' };
    onClick = spy();
    wrapper = shallow(<Visitor user={user} onVisitorClick={onClick} />);
  })

  it('should render one visitor element', () =>{
    expect(wrapper.find('.visitor').exists()).toBe(true);
    expect(wrapper.find('.visitor')).toHaveLength(1);
  })

  it('should render visitor data', () => {
    expect(wrapper.find('.visitor').childAt(0).text()).toBe('Maxi');
    expect(wrapper.find('.visitor').childAt(2).text()).toBe('Argentina');
    expect(wrapper.find('.visitor').childAt(3).text()).toBe('05-31-1991');    
  })

  it('should raise event on visitor click', () => {
    wrapper.first().simulate('click');
    expect(onClick.called).toBeTruthy();
  })

})