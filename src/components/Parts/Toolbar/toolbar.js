/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

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

import './toolbar.scss';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Home component definition and export
*/

export const Toolbar = () => {

    const[width, setWidth] = useState(900)
    const size = useWindowSize()
    /**
    * Methods
    */
//    useEffect()

    /**
    * Markup
    */

    return(
        <div className="toolbar" style={{width: `${size.width-100}px`}}>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Gallery</div>
            <div>Contact</div>
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
)(Toolbar);
 