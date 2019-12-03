/**
* Libraries
*/

import React, {
    useState
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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/


/**
* Styles
*/

import './service.scss';


/**
* Service component definition and export
*/

export const Service = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

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
        <div 
            className="service"  
        >
            <div 
                className={isHovering ? "service-icon-hover" : "service-icon"}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
            >
                <FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon"/>
            </div>
            <div 
                className="service-inner-part"
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
            >
                <div className="service-inner-part-header">{props.header}</div>
                <div className="service-inner-part-text">{props.text}</div>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            // startZooming: bindActionCreators(Actions.startZooming, dispatch),
        };
    }
)(Service);
 