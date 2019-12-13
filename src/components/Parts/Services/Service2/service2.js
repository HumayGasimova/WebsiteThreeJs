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

import './service2.scss';

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
* Service2 component definition and export
*/

export const Service2 = (props) => {

    /**
    * Methods
    */

    

    /**
    * Markup
    */

    return(
        <div className="services2">
            SERVICE2
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
)(Service2);
 