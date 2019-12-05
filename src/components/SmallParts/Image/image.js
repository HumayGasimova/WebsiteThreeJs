/**
* Libraries
*/

import React, {
    useState,
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

import './image.scss';

/**
* Images
*/

import Pic1 from '../../../images/SlotImages/IMG_20170226_150338.jpg';
import Pic2 from '../../../images/SlotImages/IMG_20170404_133938.jpg';
import Pic3 from '../../../images/SlotImages/IMG_20180515_081708_977.jpg';
import Pic4 from '../../../images/SlotImages/IMG_20180707_123405_284.jpg';
import Pic5 from '../../../images/SlotImages/IMG_20180725_165300_509.jpg';
import Pic6 from '../../../images/SlotImages/IMG_20180731_155539_567.jpg';
import Pic7 from '../../../images/SlotImages/IMG_20180808_170700_758.jpg';
import Pic8 from '../../../images/SlotImages/IMG_20180814_174126_452.jpg';
import Pic9 from '../../../images/SlotImages/IMG_20181001_143645_993.jpg';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Image component definition and export
*/

export const Image = (props) => {

    const [isHovering, setIsHovering] = useState(false);
    const [showCard, setShowCard] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const renderImage = () => {
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
        <div className={props.imageId}>
           
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
            showCard: bindActionCreators(Actions.showCard, dispatch),
        };
    }
)(Image);
 