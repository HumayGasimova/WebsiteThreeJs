import React from 'react';
import { shallow } from 'enzyme';

import { Section3 } from './section3';
import Investments from '../../Parts/Investments/investments';
import StrategicModeling from '../../Parts/StrategicModeling/strategicModeling';
import Backdrop from '../../SmallParts/Backdrop/backdrop';

describe('<Section3/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Section3/>);
    });

    it("should not render anything if the number of paperclips is below 2000", () => {
        wrapper.setProps({paperClips: 1999})
        expect(wrapper.find(Investments)).toHaveLength(0);
        expect(wrapper.find(StrategicModeling)).toHaveLength(0);
        expect(wrapper.find(Backdrop)).toHaveLength(0);
    })

    it("should render <Investments/> if the number of paperclips reaches 100 and showInvestmentEngine set to true", () => {
        wrapper.setProps({paperClips: 100, showInvestmentEngine: true})
        expect(wrapper.find(Investments)).toHaveLength(1);
    })

    it("should render <StrategicModeling/> if the number of paperclips reaches 100 and strategicModelingIsShown set to true", () => {
        wrapper.setProps({paperClips: 100, strategicModelingIsShown: true})
        expect(wrapper.find(StrategicModeling)).toHaveLength(1);
    })

    it("should render <Backdrop/> if showDropdownInvestments set to true", () => {
        wrapper.setProps({showDropdownInvestments: true})
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    })

    it("should not render <Backdrop/> if showDropdownInvestments set to false", () => {
        wrapper.setProps({showDropdownInvestments: false})
        expect(wrapper.find(Backdrop)).toHaveLength(0);
    })

    it("should render <Backdrop/> if showDropdownStrategicModeling set to true", () => {
        wrapper.setProps({showDropdownStrategicModeling: true})
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    })

    it("should not render <Backdrop/> if showDropdownStrategicModeling set to false", () => {
        wrapper.setProps({showDropdownStrategicModeling: false})
        expect(wrapper.find(Backdrop)).toHaveLength(0);
    })
});
