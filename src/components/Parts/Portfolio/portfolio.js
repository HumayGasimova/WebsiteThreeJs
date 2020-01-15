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

import Button from '../../../library/Button/button';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Pic1 from '../../../images/coffee-cafe-table-food.jpg';
import Pic2 from '../../../images/notebook-laptop-camera-diary-pink-silver.jpg';
import Pic3 from '../../../images/flowers-table-pink-roses-decorations.jpg';

/**
* Constants
*/

import {
    portfolioArray
} from '../../../constants/portfolio';

/**
* Portfolio component definition and export
*/

export const Portfolio = (props) => {

    const [slower, setSlower] = useState(0);

    /**
    * Methods
    */

    const renderPageNumbers = () => {
        // return(
        //     <div className="portfolio-page-all-">{
        //         serviceCards.map((el,i)=>{
        //         return(
        //             <Service
        //                 key={i}
        //                 icon={el.icon}
        //                 header={el.header}
        //                 text={el.text}
        //                 hexagonStyle={el.hexagonStyle}
        //             />
        //         )
        //     })}</div>
        // )
    }

    const loadImage = (img) => {
        switch(img){
            case "Pic1":
                return Pic1;
            case "Pic2":
                return Pic2;
            case "Pic3":
                return Pic3;
        }
    }

    const renderPortfolioPage = () => {
        return(
            <>{
                props.portfolio.map((el,i)=>{
                    if(el.id % 2){
                        return(
                            <div key={i} className="portfolio-page-all-template-middle">
                                <div className="portfolio-page-all-description-middle">
                                    <div className="portfolio-page-all-description-name">APPLICATION</div>
                                    <div className="portfolio-page-all-description-header">Lorem ipsum dolor sit amet.</div>
                                    <div className="portfolio-page-all-description-text"> 
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
                                <div className="portfolio-page-all-image-with-odd-id">
                                    <img src={loadImage(el.image)}/>
                                </div>
                            </div>
                        )
                    }else{
                        return(
                            <div key={i} className="portfolio-page-all-template">
                                <div className="portfolio-page-all-image-with-even-id">
                                    <img src={loadImage(el.image)}/>
                                </div>
                                <div className="portfolio-page-all-description">
                                    <div className="portfolio-page-all-description-name">ILLUSTRATION</div>
                                    <div className="portfolio-page-all-description-header">Lorem ipsum dolor sit amet.</div>
                                    <div className="portfolio-page-all-description-text"> 
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
                        )
                    }
            })}</>
        )
    }
   
    const renderPortfolio = () => {
        return(
            <>
                <div className="portfolio-template-middle">
                    <div className="portfolio-description-middle">
                        <div className="portfolio-description-name">APPLICATION</div>
                        <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                        <div className="portfolio-description-text"> 
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
                        className="portfolio-image-second" 
                        style={{transform: `translate(0px, -${slower}px)`}}
                    >
                        <img src={Pic2}/>
                    </div>
                </div>
                <div className="portfolio-template">
                    <div 
                        className="portfolio-image-third"
                        style={{transform: `translate(0px, -${slower}px)`}}
                    >
                        <img src={Pic3}/>
                    </div>
                    <div className="portfolio-description">
                        <div className="portfolio-description-name">WEB DESIGN</div>
                        <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                        <div className="portfolio-description-text"> 
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
            </>
        )
    }

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        // console.log(scrollHeight)
        setSlower(scrollHeight/2);
    }

    useEffect(() => {
        let portfolioProjectsToShow = portfolioArray.slice(0, 3);
        props.initPortfolio(portfolioProjectsToShow)
        // props.initPagination()
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
           {props.portfolioPage ? renderPortfolioPage() : renderPortfolio()}

            {/* {props.portfolioPage ? 
                <div>
                    <div></div>
                    {renderPageNumbers()}
                    <div></div>
                </div> : null} */}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolio: Selectors.getPortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            initPortfolio: bindActionCreators(Actions.initPortfolio, dispatch),
        };
    }
)(Portfolio);
 