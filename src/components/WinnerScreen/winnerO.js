
/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {useSpring, animated} from 'react-spring';

/**
 * Components
 */

import O from '../XO/o';
import Winner from './winner';

/**
 * WinnerO component definition and export
 */
export const WinnerO = (props) => {

    const props1 = useSpring({
        to:{opacity: 1},
        from: { opacity: 0},
        delay: 2000
      })

        return(
            <animated.div 
                className="winnerScreen"
                style={props1}
                >
                <O
                    radius={"50"}
                    width={"230"}
                    height={"230"}
                    strokeWidth={"20"}
                    cx={"115"}
                    cy={"150"}
                    />
                <Winner
                winner={props.winner}
                />
             </animated.div>
        );
}

export default WinnerO;
