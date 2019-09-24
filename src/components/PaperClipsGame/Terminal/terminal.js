/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import TerminalLeft from './TerminalLeft/terminalLeft';
import TerminalRight from './TerminalRight/terminalRight';

/**
* Styles
*/

import './terminal.scss';

/**
* Terminal component definition and export
*/

class Terminal extends Component {

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
            <div className="terminal">
                <TerminalLeft/>
                <TerminalRight/>
            </div>
        );
    }
}

export default Terminal;
