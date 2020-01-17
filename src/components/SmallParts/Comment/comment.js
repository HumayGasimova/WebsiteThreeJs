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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './comment.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Constants
*/

import {
    feedbacksArray
} from '../../../constants/feedbacks';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Comment component definition and export
*/

export const Comment = (props) => {

    /**
    * Methods
    */
    
    /**
    * Markup
    */

    const loadImage = (img) => {
        switch(img){
            case 'Name1':
            return Img1;
        }
    }

    return(
        <div className="comment">
            <div className="comment-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="comment-wrapper">
                <div className="comment-full-name">{props.fullName}</div>
                <div className="comment-date">{props.date}</div>
                <div className="comment-text">{props.comment}</div>
                <Button 
                    className="comment-button"
                    text={"Reply"}
                    // onClick={() => viewPortfolioButtonOnClick(el.id)}
                />
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedbacksToShow: Selectors.getFeedbacksToShowState(state),
        };
    },
    (dispatch) => {
        return {
            // initFeedbacks: bindActionCreators(Actions.initFeedbacks, dispatch),
        };
    }
)(Comment);
 