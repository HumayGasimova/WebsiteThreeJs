/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

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

import './tutorial.scss';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Constants
*/

import * as Icon from '../../constants/iconNames';

/**
* Home component definition and export
*/

export const Tutorial = (props) => {

    /**
    * Methods
    */

  

    useEffect(() => {
     
    }, []);

    /**
    * Markup
    */

    return(
        <div className="tutorial">
            KKK
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
            // sidebarOnInit: Selectors.getSidebarOnInitState(state)
        };
    },
    (dispatch) => {
        return {
            // menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
            // activateIcon: bindActionCreators(Actions.activateIcon, dispatch)
        };
    }
)(Tutorial);
 