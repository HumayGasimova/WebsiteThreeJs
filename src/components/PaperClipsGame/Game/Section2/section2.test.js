import React from 'react';
import { shallow } from 'enzyme';

import { Section2 } from './section2';
import ComputationalResources from '../../Parts/ComputationalResources/computationalResources';
import Projects from '../../Parts/Projects/projects';

describe('<Section2/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Section2/>);
    });

    it("should not render anything if the number of paperclips is below 2000", () => {
        wrapper.setProps({paperClips: 1999})
        expect(wrapper.find(ComputationalResources)).toHaveLength(0);
        expect(wrapper.find(Projects)).toHaveLength(0);
    })

    it("should render <ComputationalResources/>, <Projects/> if the number of paperclips reaches 2000", () => {
        wrapper.setProps({paperClips: 2000})
        expect(wrapper.find(ComputationalResources)).toHaveLength(1);
        expect(wrapper.find(Projects)).toHaveLength(1);
    })
});
