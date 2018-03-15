import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import VisitorList from './Visitor-List'

describe('Visitor-List Component Tests', () => {

    let wrapper, onVisitorClick, visitors;

    beforeEach(() => {
        onVisitorClick = spy();
        visitors = [{ name: 'Maxi', country: 'Argentina', birthDate: '05-31-1991' }];
        wrapper = shallow(<VisitorList visitors={visitors} onVisitorClick={onVisitorClick} />);
    })

    it('should render list group element', () => {
        expect(wrapper.find('.visitor-container').exists()).toBe(true);
        expect(wrapper.find('.visitor-container')).toHaveLength(1);
    })

    it('should render list group element', () => {
        expect(wrapper.find('.visitor-list').exists()).toBe(true);
        expect(wrapper.find('.visitor-list')).toHaveLength(1);
    })

    it('should render title element', () => {
        expect(wrapper.find('.visitor-list-title').exists()).toBe(true);
        expect(wrapper.find('.visitor-list-title')).toHaveLength(1);
    })

})