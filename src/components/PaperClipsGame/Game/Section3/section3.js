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
import Backdrop from '../../SmallParts/Backdrop/backdrop';

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
                {this.props.showDropdownInvestments || this.props.showDropdownStrategicModeling ? <Backdrop closeDropdowns={this.props.closeDropdowns}/> : null}
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
            showDropdownInvestments: state.business.showDropdownInvestments,
            showDropdownStrategicModeling: state.business.showDropdownStrategicModeling         
            // paperclipPrice: state.business.paperclipPrice,
            // publicDemand: state.business.publicDemand,
            // marketingLevel: state.business.marketingLevel,
  
        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch)
            // raisePrice: bindActionCreators(Actions.raisePrice, dispatch),
            // marketingNextLevel: bindActionCreators(Actions.marketing, dispatch),
        };
    }
)(Section3);
