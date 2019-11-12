/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './terminalRight.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* TerminalRight component definition and export
*/

export class TerminalRight extends Component {

    /**
    * Methods
    */

    renderComments = () => {
        return(
            <div>
                {this.props.comments.map((el,i)=>{
                    return(
                        <div 
                            className={i !== this.props.comments.length-1 ? "terminal-right-comment" : "terminal-right-comment-focused"}
                            key={i}
                        >
                            {el}
                            {i === this.props.comments.length-1 ? <div className="blinking-cursor">|</div>: null} 
                        </div>
                    )
                })}
            </div>
        )
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="terminal-right">
                {this.renderComments()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            comments: Selectors.getCommentsState(state)
        };
    }
)(TerminalRight);
