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

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './manufacturing.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Manufacturing component definition and export
*/

class Manufacturing extends Component {

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
            <div className="manufacturing">
                <div className="manufacturing-label">Manufacturing</div>
                <div className="manufacturing-line"/>
                <div className="manufacturing-section">
                    <div className="manufacturing-text">Clips per Second: </div>
                </div>
                <div className="manufacturing-section">
                    <div className="manufacturing-wrapper1">
                        <Button
                            // onClick={this.makePaperclip}
                            text={"Wire"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="manufacturing-text"> inches </div>
                    </div>
                    <div className="manufacturing-text">Cost: $</div>
                </div>
                <div className="manufacturing-section">
                    <div className="manufacturing-wrapper2">
                        <Button
                            // onClick={this.makePaperclip}
                            text={"AutoClippers"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="manufacturing-text"> Number </div>
                    </div>
                    <div className="manufacturing-text">Cost: $</div>
                </div>            
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // paperClips: state.business.paperClips,
            // unsoldInventory: state.business.unsoldInventory,
            // funds: state.business.funds,
            // paperclipPrice: state.business.paperclipPrice,
            // publicDemand: state.business.publicDemand,
            // marketingLevel: state.business.marketingLevel,
            // marketingCost: state.business.marketingCost,
            // marketingButtonDisabled: state.business.marketingButtonDisabled
        };
    },
    (dispatch) => {
        return {
            // lowerPrice: bindActionCreators(Actions.lowerPrice, dispatch),
            // raisePrice: bindActionCreators(Actions.raisePrice, dispatch),
            // marketingNextLevel: bindActionCreators(Actions.marketingNextLevel, dispatch),
        };
    }
)(Manufacturing);
