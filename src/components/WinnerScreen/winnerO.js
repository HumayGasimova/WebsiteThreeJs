
/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import O from '../XO/o';
import Winner from './winner';

/**
 * WinnerO component definition and export
 */
class WinnerO extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="winnerAlign">
                 <O
                    radius={"50"}
                    width={"230"}
                    height={"230"}
                    strokeWidth={"20"}
                    cx={"115"}
                    cy={"150"}
                    />
                <Winner
                winner={this.props.winner}
                />
            </div>
        );
    }
}

export default WinnerO;
