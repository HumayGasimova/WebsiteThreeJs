/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import X from '../XO/x';
import Winner from './winner';

/**
 * WinnerX component definition and export
 */
class WinnerX extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="winnerIs">
                 <X screen={true}/>
                <Winner
                winner={this.props.winner}
                />
            </div>
        );
    }
}

export default WinnerX;
