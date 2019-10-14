import React from 'react';
import { shallow } from 'enzyme';

import { Investments } from './investments';
import Button from '../../../../library/Button/button';

describe('<Investments/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Investments investmentsCash={1000} investmentsStocks={1000} investmentsTotal={1000} investmentsLines={['']} chosenListDropdown={['']}/>);
    });

    it("should render three <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(3);
    })
});
