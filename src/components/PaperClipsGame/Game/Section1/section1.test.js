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
    Section1 
} from './section1';

import General from '../../Parts/General/general';
import Business from '../../Parts/Business/business';
import Manufacturing from '../../Parts/Manufacturing/manufacturing';

/**
* Tests
*/

describe('<Section1/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Section1/>);
    });

    it("should render <General/>, <Business/>, <Manufacturing/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(General)).toHaveLength(1);
       expect(wrapper.find(Business)).toHaveLength(1);
       expect(wrapper.find(Manufacturing)).toHaveLength(1);
    })
});
