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
 * diagonalLineLeft component definition and export
 */
export const diagonalLineLeft = (props) =>  {

    const props1 = useSpring({
        to:{opacity: 0},
        from: { opacity: 1},
        delay: 2000
      })

        return(
            // <div className={this.props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}/>
           
            <animated.div 
            style={props1}
            >
                <svg  
                    className={props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="280 155 303 303" >
                    <line 
                    x1={props.coordinateX1} y1={props.coordinateY1} x2={props.coordinateX2} y2={props.coordinateY2} />
                </svg>
            </animated.div> 
        );
    
}

export default diagonalLineLeft;
