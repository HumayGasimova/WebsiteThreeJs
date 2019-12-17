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

import Backdrop from '../../../library/Backdrop/backdrop';

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
        <div className="magnifier" style={{height: `${window.innerHeight}`}}>
            <Backdrop 
                show 
                className="backdrop-magnifier"
                onClick={() => props.imageOnClick(false)}
            />
            
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
            imageOnClick: bindActionCreators(Actions.imageOnClick, dispatch),
            // feedbackOnChange: bindActionCreators(Actions.feedbackOnChange, dispatch),
            // dotOnChange: bindActionCreators(Actions.dotOnChange, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch),
        };
    }
)(Magnifier);
 