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


/**
* Styles
*/

import './feedback.scss';

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
    teamMembers
} from '../../../constants/teamMembers';

/**
* Feedback component definition and export
*/

export const Feedback = (props) => {

    /**
    * Methods
    */

    const renderMembersInfo = () => {
        return(
            <div className="teamInformation-members">
            
            </div>
        )
    }

    useEffect(() => {
        props.initTeamMembers(teamMembers);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="feedback">
            <div className="feedback-border1">
                <div className="feedback-border2">
                    <h1>What Clients Say About Us</h1>
                    <div className="feedback-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    {renderMembersInfo()}
                </div>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            members: Selectors.getMembersState(state),
        };
    },
    (dispatch) => {
        return {
            initTeamMembers: bindActionCreators(Actions.initTeamMembers, dispatch),
        };
    }
)(Feedback);
 