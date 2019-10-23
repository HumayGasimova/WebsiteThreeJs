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
        wrapper = shallow(<Manufacturing sendCommentToTerminal={()=>{}}/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("should render <AutoWireBuyer/> if wireBuyerIsShown set to true", () => {
        wrapper.setProps({wireBuyerIsShown: true})
        expect(wrapper.find(AutoWireBuyer)).toHaveLength(1);
    });

    it("should not render <AutoWireBuyer/> if wireBuyerIsShown set to false", () => {
        wrapper.setProps({wireBuyerIsShown: false})
        expect(wrapper.find(AutoWireBuyer)).toHaveLength(0);
    });

    it("should render <AutoClippers/> if autoClippersIsShown set to true", () => {
        wrapper.setProps({autoClippersIsShown: true})
        expect(wrapper.find(AutoClippers)).toHaveLength(1);
    });

    it("should not render <AutoClippers/> if autoClippersIsShown set to false", () => {
        wrapper.setProps({autoClippersIsShown: false})
        expect(wrapper.find(AutoClippers)).toHaveLength(0);
    });

    it("should render <MegaClippers/> if autoClipperInitPrice set to true", () => {
        wrapper.setProps({megaClippersIsShown: true})
        expect(wrapper.find(MegaClippers)).toHaveLength(1);
    });

    it("should not render <MegaClippers/> if autoClipperInitPrice set to false", () => {
        wrapper.setProps({megaClippersIsShown: false})
        expect(wrapper.find(MegaClippers)).toHaveLength(0);
    });
});
