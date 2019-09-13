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

import './business.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Business component definition and export
*/

class Business extends Component {

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
            <div className="business">
                <div className="business-label">Business</div>
                <div className="business-line"/>
                <div className="business-section">
                    <div className="business-text">Available Funds: $ {this.props.funds}</div>
                    <div className="business-text">Unsold Inventory: {this.props.unsoldInventory}</div>
                    <div className="business-wrapper1">
                        <Button
                            onClick={this.props.lowerPrice}
                            text={"lower"}
                        />
                        <Button
                            onClick={this.props.raisePrice}
                            text={"raise"}
                        />
                        <div className="business-text">Price per Clip: $ {this.props.paperclipPrice}</div>
                    </div>
                    <div className="business-text">Public Demand: {this.props.publicDemand}%</div>
                </div>
                <div className="business-section">
                    <div className="business-wrapper2">
                        <Button
                            onClick={this.props.marketingNextLevel}
                            text={"Marketing"}
                            disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="business-text">Level: {this.props.marketingLevel}</div>
                    </div>
                    <div className="business-text">Cost: ${this.props.marketingCost.toFixed(2)}</div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: state.business.paperClips,
            unsoldInventory: state.business.unsoldInventory,
            funds: state.business.funds,
            paperclipPrice: state.business.paperclipPrice,
            publicDemand: state.business.publicDemand,
            marketingLevel: state.business.marketingLevel,
            marketingCost: state.business.marketingCost,
            marketingButtonDisabled: state.business.marketingButtonDisabled
        };
    },
    (dispatch) => {
        return {
            lowerPrice: bindActionCreators(Actions.lowerPrice, dispatch),
            raisePrice: bindActionCreators(Actions.raisePrice, dispatch),
            marketingNextLevel: bindActionCreators(Actions.marketing, dispatch),
        };
    }
)(Business);
