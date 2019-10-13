import React from 'react';
import { shallow } from 'enzyme';

import { Investments } from './investments';
import Button from '../../../../library/Button/button';


describe('<Investments / >', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Investments />);
    });

    it("should render three <Buttons />", () => {
       expect(wrapper.find(Button)).toHaveLength(3);
    })
});
