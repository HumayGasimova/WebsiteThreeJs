/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './portfolio.scss';

/**
* Components
*/

import Project from '../../SmallParts/Project/project';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Pic1 from '../../../images/coffee-cafe-table-food.jpg';
import Pic2 from '../../../images/notebook-laptop-camera-diary-pink-silver.jpg';
import Pic3 from '../../../images/flowers-table-pink-roses-decorations.jpg';

/**
* Portfolio component definition and export
*/

export const Portfolio = (props) => {

    const [slower, setSlower] = useState(0);

    /**
    * Methods
    */

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        console.log(scrollHeight)
        setSlower(scrollHeight/2);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
    * Markup
    */

    return(
        <div className={`${props.className}`} id="portfolio">
            <div className={`${props.className}-paragraph`}>
                <div className={`${props.className}-text-line1`}>WORKS</div>
                <div className={`${props.className}-text-line2`}>View our works below to see our design and way of development.</div>
                <div className={`${props.className}-text-line3`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            <div className={`${props.className}-template`}>
                <div 
                    className={`${props.className}-image-first`} 
                    style={props.className === "portfolio" ? {transform: `translate(0px, -${slower}px)`} : null}
                >
                    <img src={Pic1}/>
                </div>
                <div className={`${props.className}-description`}>
                    <div className={`${props.className}-description-name`}>ILLUSTRATION</div>
                    <div className={`${props.className}-description-header`}>Lorem ipsum dolor sit amet.</div>
                    <div className={`${props.className}-description-text`}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button 
                        className="portfolio-description-button"
                        text={"View Portfolio"}
                    />
                </div>
            </div>
            <div className={`${props.className}-template-middle`}>
                <div className={`${props.className}-description-middle`}>
                    <div className={`${props.className}-description-name`}>APPLICATION</div>
                    <div className={`${props.className}-description-header`}>Lorem ipsum dolor sit amet.</div>
                    <div className={`${props.className}-description-text`}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button 
                        className="portfolio-description-button-middle"
                        text={"View Portfolio"}
                    />
                </div>
                <div 
                    className={`${props.className}-image-second`} 
                    style={props.className === "portfolio" ? {transform: `translate(0px, -${slower}px)`} : null}
                >
                    <img src={Pic2}/>
                </div>
            </div>
            <div className={`${props.className}-template`}>
                <div 
                    className={`${props.className}-image-third`} 
                    style={props.className === "portfolio" ? {transform: `translate(0px, -${slower}px)`} : null}
                >
                    <img src={Pic3}/>
                </div>
                <div className={`${props.className}-description`}>
                    <div className={`${props.className}-description-name`}>WEB DESIGN</div>
                    <div className={`${props.className}-description-header`}>Lorem ipsum dolor sit amet.</div>
                    <div className={`${props.className}-description-text`}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button 
                        className="portfolio-description-button"
                        text={"View Portfolio"}
                    />
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(Portfolio);
 