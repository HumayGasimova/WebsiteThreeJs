import React from 'react';
import { shallow } from 'enzyme';

import { Section3 } from './section3';
import Investments from '../../Parts/Investments/investments';
import StrategicModeling from '../../Parts/StrategicModeling/strategicModeling';

describe('<Section2/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Section3/>);
    });

    it("should not render anything if the number of paperclips is below 2000", () => {
        wrapper.setProps({paperClips: 1999})
        expect(wrapper.find(Investments)).toHaveLength(0);
        expect(wrapper.find(StrategicModeling)).toHaveLength(0);
    })

    it("should render <Investments/> if the number of paperclips reaches 2000 and showInvestmentEngine set to true", () => {
        wrapper.setProps({paperClips: 2000, showInvestmentEngine: true})
        expect(wrapper.find(Investments)).toHaveLength(1);
    })

    it("should render <StrategicModeling/> if the number of paperclips reaches 2000 and showStrategicModeling set to true", () => {
        wrapper.setProps({paperClips: 2000, showStrategicModeling: true})
        expect(wrapper.find(StrategicModeling)).toHaveLength(1);
    })
});
