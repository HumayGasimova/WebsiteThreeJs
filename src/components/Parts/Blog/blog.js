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

import Achievement from '../../SmallParts/Achievement/achievement';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Blog component definition and export
*/

export const Blog = (props) => {

    /**
    * Methods
    */



    /**
    * Markup
    */

    return(
        <div className="blog">

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
 