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

/**
* Components
*/


/**
* Styles
*/

import './magnifier.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Constants
*/

import {
    teamMembers
} from '../../../constants/teamMembers';

/**
* Magnifier component definition and export
*/

export const Magnifier = (props) => {

    /**
    * Methods
    */



    /**
    * Markup
    */

    return(
        <div className="magnifier">
            
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // feedbackOnChange: bindActionCreators(Actions.feedbackOnChange, dispatch),
            // dotOnChange: bindActionCreators(Actions.dotOnChange, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch),
        };
    }
)(Magnifier);
 