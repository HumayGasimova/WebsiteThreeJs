/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './navigationItems.scss';

/**
 * NavigationItems component definition and export
 */

export const NavigationItems = (props) => {
    return(
        <div className={props.className}>
           {props.children}
        </div>
    );
}

export default NavigationItems;


