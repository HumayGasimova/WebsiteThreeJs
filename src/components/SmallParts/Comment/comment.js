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

    const [value, setValue] = useState('')
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

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const renderInput = () => {
        if(!props.inputIsShown) {
            setValue('');
            clearInputValue("comment");
        }
        return(
            <div className="comment-wrapper-input">
                <input placeholder="add coment"  id="comment" onChange={() => onChangeHandler(event)}/>
                <Button 
                    className="comment-button-input"
                    text={"OK"}
                    onClick={() => props.addComment(value)}
                />
            </div>
        )
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
                {props.inputIsShown ? 
                    renderInput() : 
                    <Button 
                        className="comment-button"
                        text={"Reply"}
                        onClick={props.onClick}
                        disabled={props.fullName === "Name3"}
                    />}
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
 