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
import Grid from '../../SmallParts/Grid/grid';
import Dropdown from '../../SmallParts/Dropdown/dropdown';
import Backdrop from '../../SmallParts/Backdrop/backdrop';

/**
* Styles
*/

import './strategicModelingLeft.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingLeft component definition and export
*/

export class StrategicModelingLeft extends Component {

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
            <div className="strategicModelingLeft">
               
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
)(StrategicModelingLeft);
