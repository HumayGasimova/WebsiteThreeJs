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
    faTimes,
    faArrowLeft,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

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
            >
                <FontAwesomeIcon 
                    icon={faTimes} 
                    size="3x"
                    className="magnifier-icon-x"
                    // onClick={() => iconOnClick("instagram", props.linkInstagram)}
                />
                <FontAwesomeIcon 
                    icon={faArrowLeft} 
                    size="3x"
                    className="magnifier-icon-arrow-left"
                    // onClick={() => iconOnClick("instagram", props.linkInstagram)}
                />
                <FontAwesomeIcon 
                    icon={faArrowRight} 
                    size="3x"
                    className="magnifier-icon-arrow-right"
                    // onClick={() => iconOnClick("instagram", props.linkInstagram)}
                />
           </Backdrop>
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
 