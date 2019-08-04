/**
 * Libraries
 */

import React from 'react';

/**
 * Components
 */

import NavigationItem from './NavigationItem/navigationItem';

/**
 * Styles
 */

import './navigationItems.scss';

/**
 * NavigationItems component definition and export
 */

export const NavigationItems = (props) => {
    return(
        <ul className="navigationItems">
            <NavigationItem 
                link
                className>
                    name
            </NavigationItem>   
        </ul>
    );
}

export default NavigationItems;


