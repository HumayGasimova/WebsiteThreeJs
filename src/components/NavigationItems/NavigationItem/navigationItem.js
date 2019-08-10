/**
 * Libraries
 */

import React from 'react';
import {
    NavLink
 } from 'react-router-dom';

/**
 * Styles
 */

import './navigationItem.scss';

/**
 * NavigationItem component definition and export
 */

export const NavigationItem = (props) => {
    return(
       <li className={props.className}>
           <NavLink
                exact
                to={props.path}
                activeStyle={{color: "rgb(60, 134, 124)"}}
            >
                {props.children}
            </NavLink>
       </li>
    );
}

export default NavigationItem;


