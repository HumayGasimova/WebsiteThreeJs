/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './teamMember.scss';

/**
* Icons
*/

import { 
    faLightbulb,
    faLaptopCode,
    faCog,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

/**
* Images
*/

import Image1 from '../../../images/Portrait_Placeholder.png';

/**
* TeamMember component definition and export
*/

export const TeamMember = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

   const renderIamge = (img) => {
        switch(img) {
            case "Image1":
                return Image1;
        }
    }


    /**
    * Markup
    */

    return(
        <div className="team-member">
            <div className="team-member-full-name">{props.fullName}</div>
            <div className="team-member-position">{props.position}</div>
            <div className="team-member-image">
                <img src={renderIamge(props.image)}/>
            </div>
            <div className="team-member-info">{props.info}</div>
        </div>
    );
}

export default TeamMember;
 