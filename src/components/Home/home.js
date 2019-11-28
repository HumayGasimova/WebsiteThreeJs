/**
* Libraries
*/

import React from 'react';

import {
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
 * Components
 */

/**
 * Styles
 */

import './home.scss';


/**
 * Home component definition and export
 */
export const Home = () => {

    /**
    * Markup
    */

    return(
        <div className="header">
            cc
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            // startZooming: bindActionCreators(Actions.startZooming, dispatch),
        };
    }
)(Home);
 