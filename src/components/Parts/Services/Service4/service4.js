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

import './service4.scss';

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
* Service4 component definition and export
*/

export const Service4 = (props) => {

    /**
    * Methods
    */

    

    /**
    * Markup
    */

    return(
        <div className="services4">
            SERVICE4
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
)(Service4);
 