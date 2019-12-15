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

import { 
    CSSTransition 
} from 'react-transition-group';


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
            {/* <CSSTransition 
                in={props.menuButtonIsPressed} 
                timeout={1000}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: '',
                    enterActive: 'sidebar-icon-open',
                    exit: '',
                    exitActive: 'sidebar-icon-close'
                }}
            >  */}
                <a className={props.menuButtonIsPressed ? props.classNameIcon : "sidebar-icon-close"} href={"#home"}>Home</a>
                <a className={props.menuButtonIsPressed ? props.classNameIcon : "sidebar-icon-close"} href={"#services"}>Services</a>
                <a className={props.menuButtonIsPressed ? props.classNameIcon : "sidebar-icon-close"} href={"#about"}>About</a>
                <a className={props.menuButtonIsPressed ? props.classNameIcon : "sidebar-icon-close"} href={"#gallery"}>Gallery</a>
                <a className={props.menuButtonIsPressed ? props.classNameIcon : "sidebar-icon-close"} href={"#contact"}>Contact</a>
            {/* </CSSTransition> */}
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
 