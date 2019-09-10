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

import ComputationalResources from '../../Parts/ComputationalResources/computationalResources';

/**
* Styles
*/

import './section2.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Section2 component definition and export
*/

class Section2 extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Methods
    */

    renderSection2 = () => {
        if(this.props.paperClips >= 2000){
            return(
                <ComputationalResources/>
                // {/* <Projects/> */}
            )
        }
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="section2">
                {this.renderSection2()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: state.business.paperClips,
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
)(Section2);
