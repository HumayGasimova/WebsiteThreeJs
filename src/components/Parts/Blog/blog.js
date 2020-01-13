/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './blog.scss';

/**
* Components
*/

import BlogCard from '../../SmallParts/BlogCard/blogCard';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    blogCards
} from '../../../constants/blogCards';

/**
* Blog component definition and export
*/

export const Blog = (props) => {

    /**
    * Methods
    */

    const renderBlogCards = () => {
        return(
            <div className="blog-wrapper">{blogCards.map((el, i) => {
                return(
                    <BlogCard
                        key={i}
                        image={el.image}
                        date={el.date}
                        author={el.author}
                        numberOfComments={el.numberOfComments}
                        text={el.text}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="blog">
            <div className="blog-paragraph">
                <div className="blog-text-line1">BLOG</div>
                <div className="blog-text-line2">Recent Blog</div>
                <div className="blog-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            {/* <div > */}
                {renderBlogCards()}
            {/* </div> */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Blog);
 