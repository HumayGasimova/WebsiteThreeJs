import React from 'react';
import { shallow } from 'enzyme';

import { Business } from './business';
import Button from '../../../../library/Button/button';
import RevTracker from './RevTracker/revTracker';

describe('<Business/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Business funds={10} marketingCost={10} startUpdatingUnsoldInventory={()=>{}}/>);
    });

    it("should render three <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(3);
    })

    it("should render <RevTracker/> if revTracker set to true", () => {
        wrapper.setProps({revTracker: true})
        expect(wrapper.find(RevTracker)).toHaveLength(1);
    })

    it("should not render <RevTracker/> if revTracker set to false", () => {
        wrapper.setProps({revTracker: false})
        expect(wrapper.find(RevTracker)).toHaveLength(0);
    })

    it("<Button> should contain className = `revTracker-text`", () => {
        wrapper.setProps({revTracker: true})
        expect(wrapper.find(RevTracker).dive().find('.revTracker-text')).toHaveLength(2);
    })
});
