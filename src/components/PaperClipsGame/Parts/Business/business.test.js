import React from 'react';
import { shallow } from 'enzyme';

import { Business } from './business';
import Button from '../../../../library/Button/button';
import RevTracker from './RevTracker/revTracker';

describe('<Business/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Business 
                            avgRevPerSec={10} 
                            avgClipsSoldPerSec={10} 
                            funds={10} 
                            marketingCost={10} 
                            unsoldInventory={100} 
                            paperclipPrice={100} 
                            publicDemand={100} 
                            marketingCost={100} 
                            startUpdatingUnsoldInventory={()=>{}}
                            />);
    });

    it("should render three <Buttons/> if businessSectionIsShown is set to true", () => {
        wrapper.setProps({businessSectionIsShown: true})
       expect(wrapper.find(Button)).toHaveLength(3);
    })

    it("should render <RevTracker/> if revTracker and businessSectionIsShown set to true", () => {
        wrapper.setProps({revTracker: true, businessSectionIsShown: true})
        expect(wrapper.find(RevTracker)).toHaveLength(1);
    })

    it("should not render <RevTracker/> if revTracker set to false", () => {
        wrapper.setProps({revTracker: false})
        expect(wrapper.find(RevTracker)).toHaveLength(0);
    })

    it("<Button> should contain className = `revTracker-text`", () => {
        wrapper.setProps({revTracker: true, businessSectionIsShown: true})
        expect(wrapper.find(RevTracker).dive().find('.revTracker-text')).toHaveLength(2);
    })
});
