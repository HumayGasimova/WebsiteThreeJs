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

import './peoplesFeedback.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

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
* PeoplesFeedback component definition and export
*/

export const PeoplesFeedback = (props) => {

    /**
    * Methods
    */


    useInterval(() => {
        props.feedbackOnChange();
    }, 3000)

    /**
    * Markup
    */

    return(
        <div className="peoplesFeedback">
            <div className="peoplesFeedback-text">
                {props.feedback[0]}
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            feedbackOnChange: bindActionCreators(Actions.feedbackOnChange, dispatch),
        };
    }
)(PeoplesFeedback);
 