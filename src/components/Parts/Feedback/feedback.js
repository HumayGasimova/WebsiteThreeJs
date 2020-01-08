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

/**
* Styles
*/

import './feedback.scss';

/**
* Components
*/

import Project from '../../SmallParts/Project/project';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Pic1 from '../../../images/coffee-cafe-table-food.jpg';
import Pic2 from '../../../images/notebook-laptop-camera-diary-pink-silver.jpg';
import Pic3 from '../../../images/flowers-table-pink-roses-decorations.jpg';

/**
* Feedback component definition and export
*/

export const Feedback = (props) => {
    
    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="feedback" >
       
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
)(Feedback);
 