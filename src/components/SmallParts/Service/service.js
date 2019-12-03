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
    faLaptopCode,
    faChartLine,
    faPaperPlane,
    faUniversity,
    faCameraRetro,
    faShoppingBag
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

    const renderIcon = () => {
        switch(props.icon) {
            case "faLaptopCode":
                return (<FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon"/>);
            case "faChartLine":
                return (<FontAwesomeIcon icon={faChartLine} size="lg" className="icon"/>);
            case "faPaperPlane":
                return (<FontAwesomeIcon icon={faPaperPlane} size="lg" className="icon"/>);
            case "faUniversity":
                return (<FontAwesomeIcon icon={faUniversity} size="lg" className="icon"/>);
            case "faCameraRetro":
                return (<FontAwesomeIcon icon={faCameraRetro} size="lg" className="icon"/>);
            case "faShoppingBag":
                return (<FontAwesomeIcon icon={faShoppingBag} size="lg" className="icon"/>);
        }
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
               {renderIcon()} 
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
 