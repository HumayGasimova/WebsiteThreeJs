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
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Section3 component definition and export
*/

export class Section3 extends Component {

    /**
    * Methods
    */

    renderSection3 = () => {
        if(this.props.paperClips >= 100){
            // if(this.props.paperClips){
            return(
                <div>
                    {this.props.showInvestmentEngine ? <Investments/> : null}
                    {this.props.strategicModelingIsShown ?  <StrategicModeling/> : null}
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
            paperClips: Selectors.getPaperclipsState(state),
            showInvestmentEngine: Selectors.getShowInvestmentEngineState(state),
            strategicModelingIsShown: Selectors.getStrategicModelingIsShownState(state),
            showDropdownInvestments: Selectors.getShowDropdownInvestmentsState(state),
            showDropdownStrategicModeling: Selectors.getShowDropdownStrategicModelingState(state)
  
        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch)
        };
    }
)(Section3);
