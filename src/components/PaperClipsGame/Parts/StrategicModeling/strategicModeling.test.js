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
    StrategicModeling 
} from './strategicModeling';
import Button from '../../../../library/Button/button';
import Dropdown from '../../SmallParts/Dropdown/dropdown';

/**
* Tests
*/

describe('<StrategicModeling/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<StrategicModeling 
                            newTournamentCost={100} 
                            chosenListDropdown={['']}
                            />);
    });

    it("should render two <Buttons/> and one <Dropdown/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(2);
       expect(wrapper.find(Dropdown)).toHaveLength(1);
    })
});
