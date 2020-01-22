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
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import BlogCard from '../../SmallParts/BlogCard/blogCard';
import Pagination from '../../SmallParts/Pagination/pagination';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './blogPage.scss';

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
* BlogPage component definition and export
*/

export const BlogPage = (props) => {

    /**
    * State
    */

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
        <div className="blog-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Portfolio"}
            />
            {renderBlogCards()}
            <Pagination 
                page="blogPage"
            />
            <Footer/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(BlogPage);
 