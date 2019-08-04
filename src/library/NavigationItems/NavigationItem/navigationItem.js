/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './navigationItem.scss';

/**
 * NavigationItem component definition and export
 */

export const NavigationItem = (props) => {
    return(
       <li className="navigationItem">
           <a 
            href={props.link}
            className={props.className}
            >
                {props.children}
            </a>
       </li>
    );
}

export default NavigationItem;


