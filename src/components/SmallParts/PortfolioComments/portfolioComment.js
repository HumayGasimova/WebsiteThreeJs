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
import { ReplaySubject } from 'rxjs';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';


/**
* PortfolioComments component definition and export
*/

export const PortfolioComments = (props) => {

    /**
    * Methods
    */

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
                                onClick={() => replay(el.reply)}
                            />
                            {el.reply && el.reply.arrayOfReplies.length !== 0 ? renderReplies(el.reply) : null}
                        </div>
                    )
                })}</div>
            )
       
    }

    const renderComments = () => {
        return(
            <div className="portfolio-comments-all">{props.comments.array.map((el, i) => {
                return(
                    <div  key={i} className="portfolio-comment">
                        <Comment 
                            image={el.image}
                            fullName={el.fullName}
                            date={el.date}
                            comment={el.comment}
                            // onClick={() => replay(el.replay)}
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
       <>{props.comments ? 
            <div className="portfolio-comments">
                <div className="portfolio-comments-total-number-of-comments">{props.comments.sum} Comments</div>
                {renderComments()}
            </div> : 
            <div className="portfolio-comments-spinner"><Spinner/></div>
       }</> 
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(PortfolioComments);
 