/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import { 
    CSSTransition 
} from 'react-transition-group';

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
                <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#home"}>Home</a>
                <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#services"}>Services</a>
                <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#about"}>About</a>
                <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#gallery"}>Gallery</a>
                <a className={props.menuButtonIsPressed ? "sidebar-icon-open" : "sidebar-icon-close"} href={"#contact"}>Contact</a>
            </div>
        </CSSTransition>
    );
}
 export default Sidebar;
 