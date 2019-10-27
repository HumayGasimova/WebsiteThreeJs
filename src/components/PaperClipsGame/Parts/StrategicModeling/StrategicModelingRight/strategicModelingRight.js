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


/**
* Styles
*/

import './strategicModelingRight.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingRight component definition and export
*/

export class StrategicModelingRight extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {}
        
    }

    /**
    * Methods
    */


    
    /**
    * Markup
    */

    render(){
        return(
            <div className="strategicModelingRight">
                <div className="strategicModelingRight-row">
                    <div className="strategicModelingRight-column-header"></div>
                    <div className="strategicModelingRight-column-header">Move A</div>
                    <div className="strategicModelingRight-column-header">Move B</div>
                </div>
                <div className="strategicModelingRight-row">
                    <div className="strategicModelingRight-column-header">Move A</div>
                    <div className="strategicModelingRight-column-1">34</div>
                    <div className="strategicModelingRight-column-2">5</div>
                </div>
                <div className="strategicModelingRight-row">
                    <div className="strategicModelingRight-column-header">Move B</div>
                    <div className="strategicModelingRight-column-3">5</div>
                    <div className="strategicModelingRight-column-4">34</div>
                </div>
              
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // listStrategicModeling: Selectors.getListStrategicModelingState(state),
            // showDropdownStrategicModeling: Selectors.getShowDropdownStrategicModelingState(state),
            // chosenListDropdown: Selectors.getChosenListDropdownState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleDropdownStrategicModeling: bindActionCreators(Actions.toggleDropdownStrategicModeling, dispatch),
        };
    }
)(StrategicModelingRight);
