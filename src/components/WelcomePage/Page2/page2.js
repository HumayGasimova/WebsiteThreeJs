/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import ButtonImage from '../ButtonImage/buttonImage';

/**
 * Pictures
 */

import ticTacToe3x3 from '../../../Image/3x3TicTacToe.png';
import ticTacToe4x4 from '../../../Image/4x4TicTacToe.png';
/**
 * Styles
 */

import './page2.scss';

/**
 * WelcomePage component definition and export
 */

class Page2 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
    super(props);
    this.state = {
       showImageButtons: true
    }
}
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="page2">

            </div>
        );
    }
}

export default Page2;
