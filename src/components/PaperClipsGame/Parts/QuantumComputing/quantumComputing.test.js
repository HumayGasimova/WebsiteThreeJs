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
    QuantumComputing 
} from './quantumComputing';
import Button from '../../../../library/Button/button';
import Chip from '../../SmallParts/Chip/chip';

/**
* Tests
*/

describe('<QuantumComputing/>', () => {
    let wrapper;
    let chips = [
        {
            chipsNumber: 'chip3',
            showChip: false,
            id: "chip3",
            qOps: -360
        }
    ]

    let chips2 = [
        {
            chipsNumber: 'chip3',
            showChip: false,
            id: "chip3",
            qOps: -360
        },
        {
            chipsNumber: 'chip3',
            showChip: false,
            id: "chip3",
            qOps: -360
        },
        {
            chipsNumber: 'chip3',
            showChip: false,
            id: "chip3",
            qOps: -360
        }
    ]

    beforeEach(() => {
        wrapper = shallow(<QuantumComputing chips={[]}/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    })

    it("should render one <Chip/>", () => {
        wrapper.setProps({chips: chips})
       expect(wrapper.find(Chip).length).toBe(1);
    })

    it("should render three <Chip/>", () => {
        wrapper.setProps({chips: chips2})
       expect(wrapper.find(Chip).length).toBe(3);
    })
});
