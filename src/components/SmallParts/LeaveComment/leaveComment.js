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

import './leaveComment.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Input from '../../../library/Input/input';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    leaveCommentInputForm
} from '../../../constants/leaveCommentInputsForm';

/**
* LeaveComment component definition and export
*/

export const LeaveComment = (props) => {

    /**
    * Methods
    */

    
    useEffect(() => {
        props.initLeaveCommentForm(leaveCommentInputForm);
    }, [])

    const renderLeaveCommentInputs = () => {
        return(
            <>
                {props.leaveCommentForm.map((el, i)=>{
                    return(
                        <Input
                            key={i}
                            className="leave-comment-input"
                            elementType={el.elementType}
                        />
                    )
                })}
            </>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="leave-comment">
            <div className="leave-comment-text">Leave a comment</div>
            <div className="leave-comment-form">
                {renderLeaveCommentInputs()}
                <Button 
                    className="post-comment-button"
                    text={"Post Comment"}
                    // onClick={() => props.addComment(value)}
                />
            </div>
          
        </div>
    );
}

export default connect(
    (state) => {
        return {
            leaveCommentForm: Selectors.getLeaveCommentFormState(state),
        };
    },
    (dispatch) => {
        return {
            initLeaveCommentForm: bindActionCreators(Actions.initLeaveCommentForm, dispatch),
        };
    }
)(LeaveComment);
 