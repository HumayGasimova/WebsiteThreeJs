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
                <div>
                    <div className="strategicModelingLeft-list">1:Random: 88</div>
                    <div className="strategicModelingLeft-list">2:Random: 88</div>
                    <div className="strategicModelingLeft-list">3:Random: 88hdft8</div>
                    <div className="strategicModelingLeft-list">4:Random: 888</div>
                </div>
                <div>
                    <div className="strategicModelingLeft-list">5:Random: 888</div>
                    <div className="strategicModelingLeft-list">6:Random: 88ht8rtr</div>
                    <div className="strategicModelingLeft-list">7:Random: 8</div>
                    <div className="strategicModelingLeft-list">8:Random: 888</div>
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
)(StrategicModelingLeft);
