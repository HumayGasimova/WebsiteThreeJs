/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
   faMapMarkerAlt,
   faPhoneAlt,
   faEnvelope
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import SendMessage from '../SendMessage/sendMessage';

/**
* Styles
*/

import './contactInfo.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import * as Icon from '../../../constants/iconNames';

/**
* ContactInfo component definition and export
*/

export const ContactInfo = () => {

    /**
    * Markup
    */

    return(
        <div className="contactInfo" id={Icon.CONTACT}>
            <h1 className="contactInfo-header">Get In Touch</h1>
            <div className="contactInfo-wrapper">
                <div className="contactInfo-details">
                    <div className="contactInfo-subheader">Contact Details</div>
                    <div className="contactInfo-line-wrapper">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="icon"/>
                        <div className="contactInfo-details-text">12 Avenue center, st. marks road, CA</div>
                    </div>
                    <div className="contactInfo-line-wrapper">
                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="icon"/>
                        <div className="contactInfo-details-text">+41982399090000</div>
                    </div>
                    <div className="contactInfo-line-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                        <div className="contactInfo-details-text">qasimovahumay@gmail.com</div>
                    </div>
                </div>
                <div className="contactInfo-message-up-line"/>
                <div className="contactInfo-message">
                    <div className="contactInfo-subheader">Send Us Message</div>
                    <SendMessage/>
                </div>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            services: Selectors.getServicesState(state)
        };
    }
)(ContactInfo);
 