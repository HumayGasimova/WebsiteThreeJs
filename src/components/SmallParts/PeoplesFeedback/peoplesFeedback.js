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


    // useInterval(() => {
    //     props.feedbackOnChange();
    //     props.dotOnChange();
    // }, 3000)

    useEffect(()=>{
        props.startChangingFeedbacks(1, 0);
        return () => props.stopChangingFeedbacks()
    },[])

    const chooseFeedback = (i) => {
        console.log(i)
        props.stopChangingFeedbacks();
        props.startChangingFeedbacks(i + 1, i);
    }

    const renderDots = () => {
        return(
            <div className="peoplesFeedback-dots">
                {props.dots.map((el,i) => {
                    return(
                        <div 
                            key={i} 
                            className={el.chosen ? "peoplesFeedback-dot-chosen": "peoplesFeedback-dot"}
                            onClick={() => chooseFeedback(i)}
                        />
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="peoplesFeedback">
            <div className="peoplesFeedback-text">
                {props.feedback[0]}
            </div>
            {renderDots()}
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            feedback: Selectors.getFeedbackState(state),
            dots: Selectors.getDotsState(state),
        };
    },
    (dispatch) => {
        return {
            startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            feedbackOnChange: bindActionCreators(Actions.feedbackOnChange, dispatch),
            dotOnChange: bindActionCreators(Actions.dotOnChange, dispatch),
            stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch),
        };
    }
)(PeoplesFeedback);
 