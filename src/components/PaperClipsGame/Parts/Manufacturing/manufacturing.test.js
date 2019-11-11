import React from 'react';
import { shallow } from 'enzyme';

import { Manufacturing } from './manufacturing';
import Button from '../../../../library/Button/button';
import AutoWireBuyer from './AutoWireBuyer/autoWireBuyer';
import AutoClippers from './AutoClippers/autoClippers';
import MegaClippers from './MegaClippers/megaClippers';

describe('<Manufacturing/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Manufacturing clipsPerSec={15} megaClippersPerSec={15} megaClippersToAdd={15} wire={15} wirePrice={15} sendCommentToTerminal={()=>{}}/>);
    });

    it("should render one <Buttons/> if manufacturingSectionIsShown is set to true", () => {
        wrapper.setProps({manufacturingSectionIsShown: true})
       expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("should render <AutoWireBuyer/> if wireBuyerIsShown and manufacturingSectionIsShown set to true", () => {
        wrapper.setProps({wireBuyerIsShown: true, manufacturingSectionIsShown: true})
        expect(wrapper.find(AutoWireBuyer)).toHaveLength(1);
    });

    it("should not render <AutoWireBuyer/> if wireBuyerIsShown set to false", () => {
        wrapper.setProps({wireBuyerIsShown: false, manufacturingSectionIsShown: true})
        expect(wrapper.find(AutoWireBuyer)).toHaveLength(0);
    });

    it("should render <AutoClippers/> if autoClippersIsShown and manufacturingSectionIsShown set to true", () => {
        wrapper.setProps({autoClippersIsShown: true, manufacturingSectionIsShown: true})
        expect(wrapper.find(AutoClippers)).toHaveLength(1);
    });

    it("should not render <AutoClippers/> if autoClippersIsShown set to false", () => {
        wrapper.setProps({autoClippersIsShown: false})
        expect(wrapper.find(AutoClippers)).toHaveLength(0);
    });

    it("should render <MegaClippers/> if autoClipperInitPrice and manufacturingSectionIsShown set to true", () => {
        wrapper.setProps({megaClippersIsShown: true, manufacturingSectionIsShown: true})
        expect(wrapper.find(MegaClippers)).toHaveLength(1);
    });

    it("should not render <MegaClippers/> if autoClipperInitPrice set to false", () => {
        wrapper.setProps({megaClippersIsShown: false})
        expect(wrapper.find(MegaClippers)).toHaveLength(0);
    });
});
