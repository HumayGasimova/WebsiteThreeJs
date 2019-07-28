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

import X from '../XO/x';
import Winner from './winner';

/**
 * WinnerX component definition and export
 */
export const WinnerX = (props) => {

    const props1 = useSpring({
        to:{opacity: 1},
        from: { opacity: 0},
        delay: 2000
      })
        return(
            <animated.div 
                className={props.winnerScreen}
                style={props1}
                >
                    <X screen={true}/>
                    <Winner
                    winner={props.winner}
                    />
             </animated.div>
        );
}

export default WinnerX;
