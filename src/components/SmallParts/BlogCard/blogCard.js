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

import './blogCard.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

/**
* Icons
*/

import { 
  faComment
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

import Image1 from '../../../images/roses-1566792_960_720.jpg';
import Image2 from '../../../images/antique_watch.jpg';
import Image3 from '../../../images/brush.jpg';

/**
* BlogCard component definition and export
*/

export const BlogCard = (props) => {
    
    /**
    * Methods
    */
    
    const loadImage = (img) => {
        switch(img) {
            case 'image1':
                return Image1;
            case 'image2':
                return Image2;  
            case 'image3':
                return Image3;   
        }
    }

    /**
    * Markup
    */

    return(
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="blog-card-wrapper">
                <div className="blog-card-info">
                    <div className="blog-card-date">{props.date}</div>
                    <div className="blog-card-author">{props.author}</div>
                    <div className="blog-card-number-of-comments">
                        <FontAwesomeIcon icon={faComment} size="sm" className="icon-comment"/>
                        {props.numberOfComments}
                    </div>
                </div>
                <div className="blog-card-text">{props.text}</div>
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
)(BlogCard);
 