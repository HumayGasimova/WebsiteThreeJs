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
    General 
} from './general';
import Button from '../../../../library/Button/button';

/**
* Tests
*/

describe('<General/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<General/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    })
});
