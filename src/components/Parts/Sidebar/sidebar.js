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

import './sidebar.scss';
import { tsPropertySignature } from '@babel/types';


/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * Markup
    */

    return(
        <div className={props.className}>

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
)(Sidebar);
 