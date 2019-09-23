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
import StrategicModeling from '../../Parts/StrategicModeling/strategicModeling';

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
                    {this.props.showInvestmentEngine ? <Investments/> : null}
                    {this.props.showStrategicModeling ?  <StrategicModeling/> : null}
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
            showInvestmentEngine: state.business.showInvestmentEngine,
            showStrategicModeling: state.business.showStrategicModeling,
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
