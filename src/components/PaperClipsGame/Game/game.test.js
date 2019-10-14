import React from 'react';
import { shallow } from 'enzyme';

import { Game } from './game';
import Section1 from './Section1/section1';
import Section2 from './Section2/section2';
import Section3 from './Section3/section3';

describe('<Game/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it("should render <Section1/>, <Section2/>, <Section3/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Section1)).toHaveLength(1);
       expect(wrapper.find(Section2)).toHaveLength(1);
       expect(wrapper.find(Section3)).toHaveLength(1);
    })
});
