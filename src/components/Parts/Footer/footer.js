/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

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
* Footer component definition and export
*/

export const Footer = () => {

    /**
    * Markup
    */
   
    return(
        <div className="footer">
            <SocialMediaIcons 
                size="2x" 
                color="rgb(250, 207, 239)"
                width="150px"
                linkFacebook={"http://www.facebook.com/"}
                linkLinkedIn={"http://www.linkedin.com/"}
                linkInstagram={"http://www.instagram.com/"}
                linkTwitter={"http://www.twitter.com/"}
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
 