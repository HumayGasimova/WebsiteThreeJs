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

import './service3.scss';

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
* Service3 component definition and export
*/

export const Service3 = (props) => {

    /**
    * Methods
    */

    

    /**
    * Markup
    */

    return(
        <div className="services3">
            SERVICE3
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
)(Service3);
 