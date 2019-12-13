/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    Redirect
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

import './service5.scss';

/**
* Actions
*/


/**
* Selectors
*/


/**
* Constants
*/


/**
* Service5 component definition and export
*/

export const Service5 = (props) => {

    /**
    * Methods
    */

    

    /**
    * Markup
    */

    return(
        <div className="services5">
            SERVICE5
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // services: Selectors.getServicesState(state),
        };
    },
    (dispatch) => {
        return {
            // initServices: bindActionCreators(Actions.initServices, dispatch),
        };
    }
)(Service5);
 