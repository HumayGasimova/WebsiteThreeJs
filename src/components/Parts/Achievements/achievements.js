/**
* Libraries
*/

import React, {
    useEffect
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

import './achievements.scss';

/**
* Components
*/


/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Achievements component definition and export
*/

export const Achievements = (props) => {

    /**
    * Methods
    */

  

    /**
    * Markup
    */

    return(
        <div className="achievements">
            <div className="achievements-feedbacks-paragraph">
                <div className="achievements-feedbacks-text-line1">ACHIEVEMENTS</div>
                <div className="achievements-feedbacks-text-line2">Our achievements</div>
                <div className="achievements-feedbacks-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
)(Achievements);
 