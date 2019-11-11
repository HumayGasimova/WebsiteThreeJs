/**
* Libraries
*/

import React from 'react';
import { 
    shallow 
} from 'enzyme';

/**
* Components
*/

import { 
    ComputationalResources 
} from './computationalResources';
import Button from '../../../../library/Button/button';
import QuantumComputing from '../QuantumComputing/quantumComputing';

/**
* Tests
*/

describe('<ComputationalResources/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ComputationalResources 
                            clipsToBuyTrust={100} 
                            ops={100} 
                            opsMax={100} 
                            creativity={100} 
                            sendCommentToTerminal={()=>{}}
                            />);
    });

    it("should render two <Buttons/> if processorsNumberIsShown and processorsMemoryIsShown are set to true", () => {
        wrapper.setProps({processorsNumberIsShown: true, processorsMemoryIsShown: true})
       expect(wrapper.find(Button)).toHaveLength(2);
    })

    it("should render <QuantumComputing/> if showQuantumComputing, processorsNumberIsShown and processorsMemoryIsShown are set to true", () => {
        wrapper.setProps({quantumComputingIsShown: true, processorsNumberIsShown: true, processorsMemoryIsShown: true})
        expect(wrapper.find(QuantumComputing)).toHaveLength(1);
    })

    it("should not render <QuantumComputing/> if showQuantumComputing set to false", () => {
        wrapper.setProps({showQuantumComputing: false})
        expect(wrapper.find(QuantumComputing)).toHaveLength(0);
    })
});
