/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

/**
* Styles
*/

import './project.scss';

/**
* Images
*/

import reality from '../../../images/projectImages/3DReality.png';
import movingBalls from '../../../images/projectImages/MovingBalls.png';
import paint from '../../../images/projectImages/Paint.png';
import paperclipsGame from '../../../images/projectImages/PaperclipsGame.png';
import parallaxWebsite from '../../../images/projectImages/ParallaxWebsite.png';
import theGameOfLife from '../../../images/projectImages/TheGameOfLife.png';
import ticTacToe from '../../../images/projectImages/TicTacToe.png';

/**
* Project component definition and export
*/

export const Project = (props) => {

    /**
    * State
    */


    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img){
            case '3DReality':
                return reality;
            case 'movingBalls':
                return movingBalls;
            case 'paint':
                return paint;
            case 'paperclipsGame':
                return paperclipsGame;
            case 'parallaxWebsite':
                return parallaxWebsite;
            case 'theGameOfLife':
                return theGameOfLife;
            case 'ticTacToe':
                return ticTacToe;
        }
    }


    /**
    * Markup
    */

    return(
        <div className={props.className}>
            {/* <div className="project-info">
                <div className="project-info-name">{props.projectName}</div>
                <div className="project-info-description">{props.projectDescription}</div>
            </div> */}
            <div className="project-image">
                <img src={loadImage(props.projectImage)}/>
            </div>
            {/* <div className="project-developer-info">
                <div className="project-developer-info-name">{props.developerName}</div>
                <div className="project-developer-info-position">{props.developerPosition}</div>
            </div> */}
        </div>
    );
}

export default Project;
 