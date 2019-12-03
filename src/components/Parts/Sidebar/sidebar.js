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

import './sidebar.scss';


/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.className}>
            <div className={props.classNameIcon}>Home</div>
            <div className={props.classNameIcon}>Services</div>
            <div className={props.classNameIcon}>About</div>
            <div className={props.classNameIcon}>Gallery</div>
            <div className={props.classNameIcon}>Contact</div>
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
)(Sidebar);
 