/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

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
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faTwitter
} from '@fortawesome/fontawesome-free-brands'

/**
* Components
*/


/**
* Styles
*/

import './socialMediaIcons.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* SocialMediaIcons component definition and export
*/

export const SocialMediaIcons = (props) => {

    /**
    * Methods
    */

    const iconOnClick = (socialMedia, link) => {
        switch(socialMedia){
            case 'facebook':
                return window.location = link;
            case 'linkedIn':
                return window.location = link;
            case 'instagram':
                return window.location = link;
            case 'twitter':
                return window.location = link;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="socialMediaIcons" style={{width: `${props.width}`}}>
            <FontAwesomeIcon 
                icon={faFacebookF} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-facebook"
                onClick={() => iconOnClick("facebook", props.linkFacebook)}
            />
            <FontAwesomeIcon 
                icon={faLinkedinIn} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-linkedIn"
                onClick={() => iconOnClick("linkedIn", props.linkLinkedIn)}
            />
            <FontAwesomeIcon 
                icon={faInstagram} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-instagram"
                onClick={() => iconOnClick("instagram", props.linkInstagram)}
            />
            <FontAwesomeIcon 
                icon={faTwitter} 
                size={props.size} 
                color={props.color} 
                className="icon-social-media-twitter"
                onClick={() => iconOnClick("twitter", props.linkTwitter)}
            />
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
            // showCard: bindActionCreators(Actions.showCard, dispatch),
        };
    }
)(SocialMediaIcons);
 