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

import './service6.scss';

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
* Service6 component definition and export
*/

export const Service6 = (props) => {

    /**
    * Methods
    */

    

    /**
    * Markup
    */

    return(
        <div className="services6">
            SERVICE6
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
)(Service6);
 