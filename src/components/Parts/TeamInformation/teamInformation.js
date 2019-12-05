/**
* Libraries
*/

import React, {
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

import Service from '../../SmallParts/Service/service';

/**
* Styles
*/

import './teamInformation.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    serviceCards
} from '../../../constants/serviceCards';

/**
* TeamInformation component definition and export
*/

export const TeamInformation = (props) => {

    /**
    * Methods
    */


    /**
    * Markup
    */

    return(
        <div className="teamInformationext">
            <div className="teamInformationext-border1">
                <div className="teamInformationext-border2">
                    <h1>About us</h1>
                    <div className="teamInformationext-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            services: Selectors.getServicesState(state),
        };
    },
    (dispatch) => {
        return {
            initServices: bindActionCreators(Actions.initServices, dispatch),
        };
    }
)(TeamInformation);
 