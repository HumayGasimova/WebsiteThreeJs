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

import Button from '../../../../../library/Button/button';

/**
* Styles
*/

import './autoClippers.scss';

/**
* Utility
*/

import * as Utility from '../../../../../utility';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* AutoClippers component definition and export
*/

export class AutoClippers extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="autoClipper-section">
                <div className="autoClipper-wrapper1">
                    <Button
                        onClick={()=>this.props.autoPaperclips(this.props.paperclipPrice, this.props.delay, this.props.delayAutoPaperClippers, this.props.wire)}
                        text={"AutoClippers"}
                        disabled={this.props.autoClippersButtonDisabled}
                    
                    />
                    <div className="autoClipper-text">{this.props.autoClippersPerSec}</div>
                </div>
                <div className="autoClipper-text">Cost: ${this.props.autoClippersPerSec === 0 ? Utility.commaSeparator(this.props.autoClipperInitPrice) : Utility.commaSeparator(this.props.autoClipperPrice)}</div>
            </div>  
        );
    }
}

export default connect(
    (state) => {
        return {
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            delay: Selectors.getDelayState(state),
            delayAutoPaperClippers: Selectors.getDelayAutoPaperClippersState(state),
            wire: Selectors.getWireState(state),
            autoClippersButtonDisabled: Selectors.getAutoClippersButtonDisabledState(state),
            autoClippersPerSec: Selectors.getAutoClippersPerSecState(state),
            autoClipperInitPrice: Selectors.getAutoClipperInitPriceState(state),
            autoClipperPrice: Selectors.getAutoClipperPriceState(state) 
        };
    },
    (dispatch) => {
        return {
            autoPaperclips: bindActionCreators(Actions.autoPaperclips, dispatch)
        };
    }
)(AutoClippers);
