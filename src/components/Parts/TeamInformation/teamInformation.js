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

import TeamMemberInfo from '../../SmallParts/TeamMemberInfo/teamMemberInfo';

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
    teamMembers
} from '../../../constants/teamMembers';

import * as Icon from '../../../constants/iconNames';

/**
* TeamInformation component definition and export
*/

export const TeamInformation = (props) => {

    /**
    * Methods
    */

    const renderMembersInfo = () => {
        return(
            <div className="teamInformation-members">
                {props.members.map((el, i) => {
                    return(
                        <TeamMemberInfo 
                            key={i}
                            image={el.image}
                            fullName={el.fullName}
                            position={el.position}
                        />
                    )
                })}
            </div>
        )
    }

    useEffect(() => {
        props.initTeamMembers(teamMembers);
        return () => props.initTeamMembers([]);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="teamInformation" id={Icon.ABOUT}>
            <div className="teamInformation-border1">
                <div className="teamInformation-border2">
                    <h1>About us</h1>
                    <div className="teamInformation-text">
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
)(TeamInformation);
 