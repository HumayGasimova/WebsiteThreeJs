/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

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
* Styles
*/

import './footer.scss';

/**
* Icons
*/

import { 
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt    
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import FooterItem from '../../SmallParts/FooterItem/footerItem';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    footerInfo
} from '../../../constants/footerInfo';

/**
* Footer component definition and export
*/

export const Footer = (props) => {

    /**
    * Methods
    */

    const renderLinks = () => {
        return(
            <div className="footer-items">{footerInfo.map((el, i) => {
                return(
                    <FooterItem
                        key={i}
                        header={el.header}
                        links={el.links}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer">
            {renderLinks()}
            <div className="footer-get-in-touch">
                <div className="footer-get-in-touch-header">Get in Touch</div>
                <div className="footer-get-in-touch-item">
                    <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="icon-phone"/>
                    <div>+09012345678</div>
                </div>
                <div className="footer-get-in-touch-item">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon-email"/>
                    <div>qasimovahumay@gmail.com</div>
                </div>
                <div className="footer-get-in-touch-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="icon-address"/>
                    <div>12 Avenue center, st. marks road, CA</div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Footer);
 