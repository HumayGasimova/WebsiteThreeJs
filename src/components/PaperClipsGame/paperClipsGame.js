/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import Terminal from './Terminal/terminal';
import Game from './Game/game';

/**
* Styles
*/

import './paperClipsGame.scss';

/**
* PaperClipsGame component definition and export
*/

class PaperClipsGame extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="paper-clips-game">
                <Terminal/>
                <Game/>
            </div>
        );
    }
}

export default PaperClipsGame;
