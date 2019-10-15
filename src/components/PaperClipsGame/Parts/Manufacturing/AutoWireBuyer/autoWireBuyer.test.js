import React from 'react';
import { shallow } from 'enzyme';

import { AutoWireBuyer } from './autoWireBuyer';
import Button from '../../../../../library/Button/button';

describe('<AutoWireBuyer/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AutoWireBuyer/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    })
});
