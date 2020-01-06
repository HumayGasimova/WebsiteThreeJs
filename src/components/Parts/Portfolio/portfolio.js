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

    // const handleScroll = () => {
    //     let scrollHeight = document.body.scrollTop;
    //     let portfolioTop = document.getElementById("portfolio").offsetTop;
    //     console.log(scrollHeight)
    //     console.log(portfolioTop)
    //     setSlower(scrollHeight/2);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    /**
    * Markup
    */

    return(
        <div className="portfolio" id="portfolio">
            <div className="portfolio-paragraph">
                <div className="portfolio-text-line1">WORKS</div>
                <div className="portfolio-text-line2">Lorem ipsum dolor sit amet.</div>
                <div className="portfolio-text-line3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            <div className="portfolio-template">
                <div className="portfolio-image" style={{transform: `translate(0px, -${slower}px)`}}>
                    <img src={Pic1}/>
                </div>
                <div className="portfolio-description">
                    <div className="portfolio-description-name">ILLUSTRATION</div>
                    <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                    <div className="portfolio-description-text"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button text={"View Portfolio"}/>
                </div>
            </div>
            <div className="portfolio-template">
                <div className="portfolio-description-middle">
                    <div className="portfolio-description-name">APPLICATION</div>
                    <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                    <div className="portfolio-description-text"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button text={"View Portfolio"}/>
                </div>
                <div className="portfolio-image-middle">
                    <img src={Pic2}/>
                </div>
            </div>
            <div className="portfolio-template">
                <div className="portfolio-image">
                    <img src={Pic3}/>
                </div>
                <div className="portfolio-description">
                    <div className="portfolio-description-name">WEB DESIGN</div>
                    <div className="portfolio-description-header">View our works below to see our design and way of development.</div>
                    <div className="portfolio-description-text"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <Button text={"View Portfolio"}/>
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
 