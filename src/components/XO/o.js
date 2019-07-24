/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './xo.scss';

/**
 * O component definition and export
 */

class O extends Component {

    /**
    * Methods
    */
   
    render(){
        return(
            <svg 
                width={this.props.width} 
                height={this.props.height} 
                xmlns="http://www.w3.org/2000/svg"
                // viewBox="0 0 303 303" 
                >
                <circle 
                    className={this.props.animationShow ? "circle" : null} 
                    r={this.props.radius} 
                    cy={this.props.cy} 
                    cx={this.props.cx} 
                    strokeWidth={this.props.strokeWidth} 
                    stroke="#F1EBD5" 
                    fill="none" 
                    opacity={this.props.opacity}
                />
            </svg>
        );
    }
}

export default O;
