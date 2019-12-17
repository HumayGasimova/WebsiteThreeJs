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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faTimes,
    faArrowLeft,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Components
*/

import Backdrop from '../../../library/Backdrop/backdrop';
import Button from '../../../library/Button/button';

/**
* Styles
*/

import './magnifier.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Constants
*/

import {
    teamMembers
} from '../../../constants/teamMembers';

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
* Magnifier component definition and export
*/

export const Magnifier = (props) => {

    /**
    * Methods
    */

    const loadImage = () => {
        switch(props.imageId) {
            case 1:
                return Pic1;
            case 2:
                return Pic2;
            case 3:
                return Pic3;
            case 4:
                return Pic4;
            case 5:
                return Pic5;
            case 6:
                return Pic6;
            case 7:
                return Pic7;
            case 8:
                return Pic8;
            case 9:
                return Pic9;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="magnifier" style={{height: `${window.innerHeight}`}}>
            <Backdrop 
                show 
                className="backdrop-magnifier"
                // onClick={() => props.imageOnClick(false)}
            >
                <FontAwesomeIcon 
                    icon={faTimes} 
                    size="3x"
                    className="magnifier-icon-x"
                    onClick={() => props.imageOnClick(false)}
                />
                <Button
                    className="magnifier-button-arrow-left"
                    onClick={() => props.previousImage(props.imageId)}
                    disabled={props.disableOnPrevious}
                >
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        size="3x"
                        color={props.disableOnPrevious ? "rgb(136, 0, 101)" : "rgb(250, 207, 239)"}
                    />
                </Button>
                <Button 
                    className="magnifier-button-arrow-right"
                    onClick={() => props.nextImage(props.imageId)}
                    disabled={props.disableOnNext}
                >
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        size="3x"
                        color={props.disableOnNext ? "rgb(136, 0, 101)" : "rgb(250, 207, 239)"}
                    />
                </Button>
                <img className="magnifier-image" src={loadImage()}/>
           </Backdrop>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            imageId: Selectors.getImageIdState(state),
            disableOnNext: Selectors.getDisableOnNextState(state),
            disableOnPrevious: Selectors.getDisableOnPreviousState(state),
        };
    },
    (dispatch) => {
        return {
            imageOnClick: bindActionCreators(Actions.imageOnClick, dispatch),
            nextImage: bindActionCreators(Actions.nextImage, dispatch),
            previousImage: bindActionCreators(Actions.previousImage, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch),
        };
    }
)(Magnifier);
 