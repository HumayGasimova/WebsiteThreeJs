/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faLaptopCode,
    faChartLine,
    faPaperPlane,
    faUniversity,
    faCameraRetro,
    faShoppingBag
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/


/**
* Styles
*/

import './teamMemberInfo.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* TeamMemberInfo component definition and export
*/

export const TeamMemberInfo = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="teamMemberInfo">
            <div className="teamMemberInfo-image">
                {/* <img src={}> */}
            </div>
            <div>{props.fullName}</div>
            <div>{props.position}</div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            showCard: bindActionCreators(Actions.showCard, dispatch),
        };
    }
)(TeamMemberInfo);
 