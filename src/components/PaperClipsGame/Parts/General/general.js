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

import Button from '../../../../library/Button/button';

/**
* Styles
*/

import './general.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* General component definition and export
*/

export class General extends Component {

    /**
     * Methods
     */

    makePaperclip = () => {
        this.props.sellPaperclips();
    }

    renderDots = () => {
        return(
            <div className="general-dots">
                {this.props.dots.map((el,i) => {
                    return(
                        <div className="general-dots-dot" key={i}/>
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
            <div className="general">
                {this.props.isGameOver ? 
                <div className="general-ending">
                    <Button 
                        onClick={this.props.countdownOnClick}
                        text={"PRESS"}
                        disabled={this.props.countdown === 0}
                    />
                    {this.renderDots()}
                </div>
                     : 
                    <Button 
                        onClick={this.makePaperclip}
                        text={"Make Paperclip"}
                        disabled={this.props.makePaperclipDisabled}
                    />
                }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            makePaperclipDisabled: Selectors.getMakePaperclipDisabledState(state),
            completeGameIsThrown: Selectors.getCompleteGameIsThrownState(state),
            isGameOver: Selectors.getIsGameOverState(state),
            countdown: Selectors.getCountdownState(state),
            dots: Selectors.getDotsState(state),
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch),
            countdownOnClick: bindActionCreators(Actions.countdownOnClick, dispatch),
        };
    }
)(General);
