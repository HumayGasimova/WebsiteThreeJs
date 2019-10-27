/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import Section1 from './Section1/section1';
import Section2 from './Section2/section2';
import Section3 from './Section3/section3';

/**
* Styles
*/

import './game.scss';

/**
* Game component definition and export
*/

export class Game extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**s
    * Markup
    */

    render(){
        return(
            <div className="game">
              <Section1/>
              {/* <Section2/> */}
              <Section3/>
            </div>
        );
    }
}

export default Game;
