/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './newsletter.scss';

/**
* Newsletter component definition and export
*/

export const Newsletter = () => {

    /**
    * Markup
    */

    return(
        <div className="newsletter">
            <div className="newsletter-header">Subcribe to our Newsletter</div>
            <div className="newsletter-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}
 export default Newsletter;
 