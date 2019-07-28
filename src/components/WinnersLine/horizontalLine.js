/**
 * Libraries
 */
import React,{
    Component
} from 'react';
import {useSpring, animated} from 'react-spring';

/**
 * Styles
 */

import './winnersLine.scss';

/**
 * horizontalLine component definition and export
 */
export const horizontalLine = (props) =>  {

    const props1 = useSpring({
        to:{opacity: 0},
        from: { opacity: 1},
        delay: 2000
      })

        return(
            <animated.div 
            style={props1}
            >
                <svg 
                    height={props.height}
                    className={props.player ? "horizontalLineBrown" : "horizontalLineWhite"}
                    preserveAspectRatio="xMidYMid meet" 
                   >
                    <line x1={props.coordinateX1} y1={props.coordinateY1} x2={props.coordinateX2} y2={props.coordinateY2}/>
                </svg>
                <div>{console.log(props.coordinateX1, props.coordinateX2, props.coordinateY1, props.coordinateY2)}</div>
            </animated.div>
        );
    
}

export default horizontalLine;
