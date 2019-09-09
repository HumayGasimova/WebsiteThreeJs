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

/**
* Styles
*/

import './game.scss';

/**
* Game component definition and export
*/

class Game extends Component {

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
              <Section2/>
            </div>
        );
    }
}

export default Game;
