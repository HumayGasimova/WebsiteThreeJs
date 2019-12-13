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
            <a className={props.classNameIcon} href={"#home"}>Home</a>
            <a className={props.classNameIcon} href={"#services"}>Services</a>
            <a className={props.classNameIcon} href={"#about"}>About</a>
            <a className={props.classNameIcon} href={"#gallery"}>Gallery</a>
            <a className={props.classNameIcon} href={"#contact"}>Contact</a>
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
 