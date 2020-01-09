/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './customerFeedbacks.scss';

/**
* Components
*/

import Feedbacks from '../../SmallParts/Feedbacks/feedbacks';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* CustomerFeedbacks component definition and export
*/

export const CustomerFeedbacks = (props) => {
    
    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="customer-feedbacks" >
            <div className="customer-feedbacks-paragraph">
                <div className="customer-feedbacks-text-line1">CUSTOMER SAYS</div>
                <div className="customer-feedbacks-text-line2">Our satisfied customer says</div>
                <div className="customer-feedbacks-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <Feedbacks/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(CustomerFeedbacks);
 