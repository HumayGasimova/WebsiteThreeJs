import React from 'react';
import { shallow } from 'enzyme';

import { Business } from './investments';
import Button from '../../../../library/Button/button';
import Dropdown from '../../SmallParts/Dropdown/dropdown';
import Grid from '../../SmallParts/Grid/grid';

describe('<Investments/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Business/>);
    });

    it("should render three <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(3);
    })
});
