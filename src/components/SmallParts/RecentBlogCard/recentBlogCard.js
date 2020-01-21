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
* Icons
*/

import { 
   faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'

/**
* Styles
*/

import './recentBlogCard.scss';

/**
* Components
*/

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* RecentBlogCard component definition and export
*/

export const RecentBlogCard = (props) => {

    /**
    * Methods
    */

    const loadImage = () => {
        switch(props.image){
            case 'Name1':
            return Img1;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="recent-blog-card">
           
        </div>
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
)(RecentBlogCard);
 