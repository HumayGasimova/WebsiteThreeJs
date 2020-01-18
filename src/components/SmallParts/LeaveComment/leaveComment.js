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
import Spinner from '../../../library/Spinner/spinner';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';


/**
* LeaveComment component definition and export
*/

export const LeaveComment = (props) => {

    /**
    * Methods
    */

   

    /**
    * Markup
    */

    return(
        <div className="leave-comment">
            <div className="leave-comment-text">Leave a comment</div>
            <div className="leave-comment-form">
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
            // comments: Selectors.getSinglePortfolioState(state).comments,
        };
    },
    (dispatch) => {
        return {
            // startAddingReply: bindActionCreators(Actions.startAddingReply, dispatch),
        };
    }
)(LeaveComment);
 