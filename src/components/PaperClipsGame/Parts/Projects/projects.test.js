import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from './projects';
import Card from '../../SmallParts/Card/card';

describe('<Projects/>', () => {
    let wrapper;
    let cards = [
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        }
    ]

    let cards2 = [
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        },
        {
            text1: "Strategic Modeling (12,000 ops)",
            text2: "Analyze strategy tournaments to generate",
            text3: "Yomi",
            price: {
                ops: 3
            },
            action: 1,
            next: 'strategicModeling',
            valid: false,
            id: "card23",
            terminal: "Run tournament, pick strategy, earn Yomi based on that strategy's performance."
        }
    ]

    beforeEach(() => {
        wrapper = shallow(<Projects initProjects={()=>{}} cards={[]}/>);
    });

    it("should render three <Card/>", () => {
        wrapper.setProps({cards: cards})
       expect(wrapper.find(Card).length).toBe(3);
    })

    it("should render five <Card/>", () => {
        wrapper.setProps({cards: cards2})
       expect(wrapper.find(Card).length).toBe(5);
    })
});
