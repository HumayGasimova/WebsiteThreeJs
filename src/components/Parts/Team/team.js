/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './team.scss';

/**
* Components
*/

import TeamMember from '../../SmallParts/TeamMember/teamMember';

/**
* Constants
*/

import {
    teamMembers
} from '../../../constants/teamMembers';

/**
* Team component definition and export
*/

export const Team = () => {

    /**
    * Methods
    */

    const renderTeamMembers = () => {
        return(
            <div className="team-members">{
                teamMembers.map((el,i)=>{
                    return(
                        <TeamMember
                            key={i}
                            fullName={el.fullName}
                            position={el.position}
                            image={el.image}
                            info={el.info}
                            facebook={el.facebook}
                            linkedIn={el.linkedIn}
                            instagram={el.instagram}
                            twitter={el.twitter}
                        />
                    )
                })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="team">
            <div className="team-paragraph">
                <div className="team-text-line1">TEAM</div>
                <div className="team-text-line2">Our Team</div>
                <div className="team-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            {renderTeamMembers()}
        </div>
    );
}

export default Team;
 