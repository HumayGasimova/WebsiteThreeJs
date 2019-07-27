/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

/**
 * Styles
 */

import './winner.scss';

/**
 * Winner component definition and export
 */
class Winner extends Component {

    /**
    * Markup
    */
   
    render(){
        return(
            <div className={this.props.winner === "O" ? "winnerO" : "winnerX"}>
                WINNER!
            </div>
        );
    }
}

export default Winner;
