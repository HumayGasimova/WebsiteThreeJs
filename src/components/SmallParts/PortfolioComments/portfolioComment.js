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

import './portfolioComments.scss';

/**
* Icons
*/

import { 
    faCaretRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Comment from '../../SmallParts/Comment/comment';
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
* PortfolioComments component definition and export
*/

export const PortfolioComments = (props) => {

    /**
    * Methods
    */

    const replay = (inputState, thread, userId, array) => {
    //    props.startAddingReply(inputState, thread, userId, array);
        props.startShowingCommentInputArea(inputState, thread, userId)
    }

    const renderReplies = (replyObj) => {
        // console.log(replyObj)
            return(
                <div className="portfolio-comments-reply">{replyObj.arrayOfReplies.map((el, i) => {
                    return(
                        <div  key={i}>
                            <Comment
                                image={el.image}
                                fullName={el.fullName}
                                date={el.date}
                                comment={el.comment}
                                inputIsShown={el.inputIsShown}
                                onClick={el.reply ? () => replay(el.inputIsShown, replyObj.thread, el.id, el.reply.arrayOfReplies) : () => replay(el.inputIsShown, replyObj.thread, el.id, [])}
                            />
                            {el.reply && el.reply.arrayOfReplies.length !== 0 ? renderReplies(el.reply) : null}
                        </div>
                    )
                })}</div>
            )
       
    }

    const renderComments = () => {
        return(
            <div className="portfolio-comments-all">{props.singlePortfolio.comments.array.map((el, i) => {
                console.log(el.inputIsShown)
                return(
                    <div  key={i} className="portfolio-comment">
                        <Comment 
                            image={el.image}
                            fullName={el.fullName}
                            date={el.date}
                            comment={el.comment}
                            inputIsShown={el.inputIsShown}
                            onClick={() => replay(el.inputIsShown, 0, el.id, el.reply.arrayOfReplies)}
                        />
                        {/* {console.log(el.reply.length)} */}
                        {el.reply && el.reply.arrayOfReplies.length !== 0 ? renderReplies(el.reply) : null}
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
       <>{props.singlePortfolio.comments ? 
            <div className="portfolio-comments">
                <div className="portfolio-comments-total-number-of-comments">{props.singlePortfolio.comments.sum} Comments</div>
                {renderComments()}
                {/* <div>{console.log(props.comments.array)}</div> */}
            </div> : 
            <div className="portfolio-comments-spinner"><Spinner/></div>
       }</> 
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
            startAddingReply: bindActionCreators(Actions.startAddingReply, dispatch),
            startShowingCommentInputArea: bindActionCreators(Actions.startShowingCommentInputArea, dispatch),
        };
    }
)(PortfolioComments);
 