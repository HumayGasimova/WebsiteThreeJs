import React from 'react';
import { shallow } from 'enzyme';

import { Investments } from './investments';
import Button from '../../../../library/Button/button';
import Dropdown from '../../SmallParts/Dropdown/dropdown';
import Grid from '../../SmallParts/Grid/grid';

describe('<Investments/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Investments investmentsCash={1000} investmentsStocks={1000} investmentsTotal={1000} investmentsLines={['']} chosenListDropdown={['']}/>);
    });

    it("should render three <Buttons/>, <Dropdown/> and <Grid/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(3);
       expect(wrapper.find(Dropdown)).toHaveLength(1);
       expect(wrapper.find(Grid)).toHaveLength(1);
    })
});
