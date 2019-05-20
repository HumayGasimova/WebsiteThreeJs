/**
 * Libraries
 */
import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './winnersLine.scss';

/**
 * horizontalLine component definition and export
 */
class horizontalLine extends Component {

    /**
    * Methods
    */
   
    render(){
        return(
            <svg  
                className={this.props.player ? "horizontalLineBrown" : "horizontalLineWhite"}
                preserveAspectRatio="xMidYMid meet" 
                viewBox="280 155 303 303">
                <line x1={this.props.coordinateX1} y1={this.props.coordinateY1} x2={this.props.coordinateX2} y2={this.props.coordinateY2}/>
            </svg>
        );
    }
}

export default horizontalLine;
