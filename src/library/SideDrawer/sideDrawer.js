/**
 * Libraries
 */

import React from 'react';

/**
 * Components
 */

import NavigationItems from '../NavigationItems/navigationItems';

/**
 * Styles
 */

import './sideDrawer.scss';

/**
 * SideDrawer component definition and export
 */

export const SideDrawer = (props) => {

    return(
       <div className="sideDrawer">
           <nav>
               <NavigationItems/>
           </nav>
        </div>
    );
}

export default SideDrawer;


