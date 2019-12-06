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
    const [showPhotoInfo, setPhotoInfo] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setPhotoInfo(true);
        props.imageHover(props.id, true);
    }

    const handleMouseLeave = () => {
        props.imageHover(props.id, false);
    }

    const loadImage = () => {
        switch(props.src) {
            case "pic1":
                return Pic1;
            case "pic2":
                return Pic2;
            case "pic3":
                return Pic3;
            case "pic4":
                return Pic4;
            case "pic5":
                return Pic5;
            case "pic6":
                return Pic6;
            case "pic7":
                return Pic7;
            case "pic8":
                return Pic8;
            case "pic9":
                return Pic9;
        }
    }
    
    /**
    * Markup
    */

    return(
        <div 
            className="image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={loadImage()}/>
                <div 
                    className={props.hover ? "image-photoInfo-animation" : "image-photoInfo"}
                >
                    <div className="image-photoInfo-title">{props.title}</div>
                    <div className="image-photoInfo-description">{props.description}</div>
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
            showCard: bindActionCreators(Actions.showCard, dispatch),
            imageHover: bindActionCreators(Actions.imageHover, dispatch),
        };
    }
)(Image);
 