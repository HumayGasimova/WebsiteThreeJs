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
import RevTracker from './RevTracker/revTracker';

/**
* Styles
*/

import './business.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Business component definition and export
*/

export class Business extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */

    componentDidMount() {
        this.props.startUpdatingUnsoldInventory();
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
                    <div className="business-text">Available Funds: $ {Utility.commaSeparator(this.props.funds)}</div>
                    {this.props.revTracker ? <RevTracker avgRevPerSec={this.props.avgRevPerSec} avgClipsSoldPerSec={this.props.avgClipsSoldPerSec}/> : null}
                    {/* <RevTracker avgRevPerSec={this.props.avgRevPerSec} avgClipsSoldPerSec={this.props.avgClipsSoldPerSec}/> */}
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
            paperClips: Selectors.getPaperclipsState(state),
            unsoldInventory: Selectors.getUnsoldInventoryState(state),
            funds: Selectors.getFundsState(state),
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            publicDemand: state.business.publicDemand,
            marketingLevel: state.business.marketingLevel,
            marketingCost: state.business.marketingCost,
            marketingButtonDisabled: state.business.marketingButtonDisabled,
            revTracker: state.business.revTracker,
            avgRevPerSec: state.business.avgRevPerSec,
            avgClipsSoldPerSec: state.business.avgClipsSoldPerSec,
        };
    },
    (dispatch) => {
        return {
            lowerPrice: bindActionCreators(Actions.lowerPrice, dispatch),
            raisePrice: bindActionCreators(Actions.raisePrice, dispatch),
            marketingNextLevel: bindActionCreators(Actions.marketing, dispatch),
            startUpdatingUnsoldInventory: bindActionCreators(Actions.startUpdatingUnsoldInventory, dispatch),
        };
    }
)(Business);
