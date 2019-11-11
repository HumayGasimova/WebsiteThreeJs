/**
* Libraries
*/

import React from 'react';
import { 
    shallow 
} from 'enzyme';

/**
* Components
*/

import { 
    Paperclips 
} from './paperclips';
import Hover from '../../SmallParts/Hover/hover';

/**
* Tests
*/

describe('<Paperclips/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Paperclips 
                            paperClips={100}
                            />);
    });

    it("should render <Hover/> if isHovering set to true", () => {
        wrapper.setState({isHovering: true})
        expect(wrapper.find(Hover)).toHaveLength(1);
    })

    it("should render <Hover/> if isHovering set to false", () => {
        wrapper.setState({isHovering: false})
        expect(wrapper.find(Hover)).toHaveLength(0);
    })
});
