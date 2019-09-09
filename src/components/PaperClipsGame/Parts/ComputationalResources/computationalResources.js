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

import './computationalResources.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* ComputationalResources component definition and export
*/

class ComputationalResources extends Component {

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
            <div className="computationalResources">
                <div className="computationalResources-label">Computational Resources</div>
                <div className="computationalResources-line"/>
                <div className="computationalResources-section">
                    <div className="computationalResources-text">Trust: </div>
                    <div className="computationalResources-text">+1 Trust at:  </div>
                </div>

                <div className="computationalResources-section">
                    <div className="computationalResources-wrapper1">
                        <Button
                            className="computationalResources-button"
                            // onClick={this.props.marketingNextLevel}
                            text={"Processors"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">1</div>
                    </div>
                    <div className="computationalResources-wrapper1">
                        <Button
                            className="computationalResources-button"
                            // onClick={this.props.marketingNextLevel}
                            text={"Memory"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">1</div>
                    </div>
                </div>

                 <div className="computationalResources-section">
                    <div className="computationalResources-text">Operations: </div>
                    <div className="computationalResources-text">Creativity: </div>
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
            // marketingNextLevel: bindActionCreators(Actions.marketing, dispatch),
        };
    }
)(ComputationalResources);
