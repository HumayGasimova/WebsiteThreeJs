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
 * diagonalLineRight component definition and export
 */
export const diagonalLineRight = (props) =>  {

    const props1 = useSpring({
        to:{opacity: 0},
        from: { opacity: 1},
        delay: 2000
      })
   
    return(
        // <div className={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"}/>
       <animated.div 
            style={props1}
            >
            <svg  
                className={props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"} 
                preserveAspectRatio="xMidYMid meet"
                viewBox="275 155 303 303" >
                <line x1={props.coordinateX1} y1={props.coordinateY1} x2={props.coordinateX2} y2={props.coordinateY2}/>
            </svg>
        </animated.div>
    );
}

export default diagonalLineRight;
