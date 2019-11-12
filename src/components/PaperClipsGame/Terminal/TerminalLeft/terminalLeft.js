/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './terminalLeft.scss';

/**
* TerminalLeft component definition and export
*/

export class TerminalLeft extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="terminal-left">
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div className="terminal-focused-text">></div>
            </div>
        );
    }
}

export default TerminalLeft;
