/**
* Libraries
*/

import React from 'react';

import {
    Route
} from 'react-router-dom';

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

import './service.scss';


/**
* Service component definition and export
*/

export const Service = (props) => {

    /**
    * Markup
    */

    return(
        <div className="service">
            <div className="service-icon"/>
            <div className="service-inner-part">
                <div className="service-inner-part-header">{props.header}</div>
                <div className="service-inner-part-text">{props.text}</div>
            </div>
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
            // startZooming: bindActionCreators(Actions.startZooming, dispatch),
        };
    }
)(Service);
 