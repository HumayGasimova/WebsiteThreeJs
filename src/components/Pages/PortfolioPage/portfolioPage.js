/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './portfolioPage.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import Portfolio from '../../Parts/Portfolio/portfolio';
import Footer from '../../Parts/Footer/footer';

/**
* PortfolioPage component definition and export
*/

export const PortfolioPage = (props) => {

    /**
    * Markup
    */

    return(
        <div className="portfolio-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Portfolio"}
            />
            <Portfolio className="portfolio-page-all" portfolioPage/>
            <Footer/>
        </div>
    );
}

export default PortfolioPage;
 