import React from 'react';
import { shallow } from 'enzyme';

import { ComputationalResources } from './computationalResources';
import Button from '../../../../library/Button/button';
import QuantumComputing from '../QuantumComputing/quantumComputing';

describe('<ComputationalResources/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ComputationalResources clipsToBuyTrust={100} sendCommentToTerminal={()=>{}}/>);
    });

    it("should render two <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(2);
    })

    it("should render <QuantumComputing/> if showQuantumComputing set to true", () => {
        wrapper.setProps({showQuantumComputing: true})
        expect(wrapper.find(QuantumComputing)).toHaveLength(1);
    })

    it("should not render <QuantumComputing/> if showQuantumComputing set to false", () => {
        wrapper.setProps({showQuantumComputing: false})
        expect(wrapper.find(QuantumComputing)).toHaveLength(0);
    })
});
