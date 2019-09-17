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

import Investments from '../../Parts/Investments/investments';
import Projects from '../../Parts/Projects/projects';

/**
* Styles
*/

import './section3.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Section3 component definition and export
*/

class Section3 extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Methods
    */

    renderSection3 = () => {
        // if(this.props.paperClips >= 2000){
            if(this.props.paperClips){
            return(
                <div>
                    <Investments/> 
                </div>
            )
        }
    } 

    /**
    * Markup
    */

    render(){
        return(
            <div className="section3">
                {this.renderSection3()}
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
)(Section3);
