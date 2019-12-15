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
        <CSSTransition 
            in={props.menuButtonIsPressed} 
            timeout={1000}
            // mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'sidebar-open',
                exit: '',
                exitActive: 'sidebar-close'
            }}
        > 
            <div className="sidebar-mounted">
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
                    <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"}>Home</a>
                    <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#services"}>Services</a>
                    <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#about"}>About</a>
                    <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#gallery"}>Gallery</a>
                    <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#contact"}>Contact</a>
                {/* </CSSTransition> */}
            </div>
        </CSSTransition>
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
 