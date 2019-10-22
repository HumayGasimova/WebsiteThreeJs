/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

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
    * Constructor
    */

    constructor (props){
        super(props);
    }


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
            comments: Selectors.getCommentsState(state),
            // paperclipPrice: Selectors.getPaperclipPriceState(state),
            // wire: Selectors.getWireState(state),
            // delay: Selectors.getDelayState(state),
            // delayAutoPaperClippers: Selectors.getDelayAutoPaperClippersState(state),
            // ops: Selectors.getOpsState(state),
            // opsMax: Selectors.getOpsMaxState(state),
            // autoClipperOn: Selectors.getAutoClipperOnState(state),
        };
    },
    (dispatch) => {
        return {
            // initProjects: bindActionCreators(Actions.initProjects, dispatch),
    
        };
    }
)(TerminalRight);
