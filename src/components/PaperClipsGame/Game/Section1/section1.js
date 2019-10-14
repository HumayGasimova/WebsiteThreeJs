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

import General from '../../Parts/General/general';
import Business from '../../Parts/Business/business';
import Manufacturing from '../../Parts/Manufacturing/manufacturing';

/**
* Styles
*/

import './section1.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Section1 component definition and export
*/

export class Section1 extends Component {

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
            <div 
                className="section1"
                // onClick={this.props.closeDropdowns}
            >
               <General/>
               <Business/>
               <Manufacturing/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // listStrategicModeling: state.business.listStrategicModeling,
        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch)
        };
    }
)(Section1);
