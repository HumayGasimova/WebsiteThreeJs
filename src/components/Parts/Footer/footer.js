/**
* Libraries
*/

import React, {
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

import './footer.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';
import SocialMediaIcons from '../../SmallParts/SocialMediaIcons/socialMediaIcons';

/**
* Constants
*/


/**
* Footer component definition and export
*/

export const Footer = (props) => {

    /**
    * Methods
    */

    /**
    * Markup
    */
   
    return(
        <div className="footer">
            <SocialMediaIcons 
                size="2x" 
                color="rgb(250, 207, 239)"
                width="150px"
            />
          <div className="footer-copyrights">Crypto347 © 2019. Designed by Humay Gasimova</div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            members: Selectors.getMembersState(state),
        };
    },
    (dispatch) => {
        return {
            initTeamMembers: bindActionCreators(Actions.initTeamMembers, dispatch),
        };
    }
)(Footer);
 