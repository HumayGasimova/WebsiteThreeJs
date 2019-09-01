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
import General from './General/general';
import Business from './Business/business';
import Manufacturing from './Manufacturing/manufacturing';

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
               <General/>
               <Business/>
               <Manufacturing/>
            </div>
        );
    }
}

export default PaperClipsGame;
