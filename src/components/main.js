/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import MovingBubbles from './Parts/MovingBubbles/movingBubbles';
import OtherProjects from './Parts/OtherProjects/otherProjects';
import Services from './Parts/Services/services';
import Newsletter from './Parts/Newslatter/newsletter';
import Portfolio from './Parts/Portfolio/portfolio';
import CustomerFeedbacks from './Parts/CustomerFeedbacks/customerFeedbacks';
import Achievements from './Parts/Achievements/achievements';
import Blog from './Parts/Blog/blog';
import Footer from './Parts/Footer/footer';

/**
* Main component definition and export
*/

export const Main = () => {

    /**
    * Markup
    */

    return(
        <div className="main">
            <Toolbar className={"-main"}/>
            <MovingBubbles 
                mainHeader={"Welcome"}
            />
            <OtherProjects/>
            <Services/>
            <Newsletter/>
            <Portfolio className="portfolio"/>
            <CustomerFeedbacks/>
            <Achievements/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default Main;
 