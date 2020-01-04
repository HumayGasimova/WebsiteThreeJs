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

import './service.scss';

/**
* Icons
*/

import { 
    faLaptopCode,
    faChartLine,
    faPaperPlane,
    faUniversity,
    faCameraRetro,
    faShoppingBag
} from '@fortawesome/free-solid-svg-icons'

/**
* Service component definition and export
*/

export const Service = (props) => {

    /**
    * State
    */


    /**
    * Methods
    */

   const renderIcon = () => {
        // switch(props.icon) {
        //     case "faLaptopCode":
        //         return (<FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon"/>);
        //     case "faChartLine":
        //         return (<FontAwesomeIcon icon={faChartLine} size="lg" className="icon"/>);
        //     case "faPaperPlane":
        //         return (<FontAwesomeIcon icon={faPaperPlane} size="lg" className="icon"/>);
        //     case "faUniversity":
        //         return (<FontAwesomeIcon icon={faUniversity} size="lg" className="icon"/>);
        //     case "faCameraRetro":
        //         return (<FontAwesomeIcon icon={faCameraRetro} size="lg" className="icon"/>);
        //     case "faShoppingBag":
        //         return (<FontAwesomeIcon icon={faShoppingBag} size="lg" className="icon"/>);
        // }
    }


    /**
    * Markup
    */

    return(
        <div className="service">
            
        </div>
    );
}

export default Service;
 