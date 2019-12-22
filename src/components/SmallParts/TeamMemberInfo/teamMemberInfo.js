/**
* Libraries
*/

import React, {
    useState
} from 'react';

/**
* Styles
*/

import './teamMemberInfo.scss';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* Actions
*/

import SocialMediaIcons from '../SocialMediaIcons/socialMediaIcons';

/**
* TeamMemberInfo component definition and export
*/

export const TeamMemberInfo = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const loadImage = () => {
        switch(props.image){
            case 'Name1':
            return Img1;
        }
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    /**
    * Markup
    */

    return(
        <div className="teamMemberInfo">
            {isHovering ? 
            <div  
                onMouseLeave={handleMouseLeave} 
                className="teamMemberInfo-members-info"
            >
               <SocialMediaIcons 
                    size="2x" 
                    color="rgb(136, 0, 101)"
                    width="130px"
                    linkFacebook={props.linkFacebook}
                    linkLinkedIn={props.linkLinkedIn}
                    linkInstagram={props.linkInstagram}
                    linkTwitter={props.linkTwitter}
               />
            </div> 
            : null}
            <div 
                className="teamMemberInfo-image" 
                onMouseEnter={handleMouseEnter}                
            >
                <img src={loadImage()}/>
            </div>
            <div className="teamMemberInfo-fullName">{props.fullName}</div>
            <div className="teamMemberInfo-position">{props.position}</div>
        </div>
    );
}

export default TeamMemberInfo;
 