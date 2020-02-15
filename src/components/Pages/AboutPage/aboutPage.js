/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './aboutPage.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import CustomerFeedbacks from '../../Parts/CustomerFeedbacks/customerFeedbacks';
import Footer from '../../Parts/Footer/footer';
import Team from '../../Parts/Team/team';

/**
* AboutPage component definition and export
*/

export const AboutPage = () => {

    /**
    * Markup
    */

    return(
        <div className="about-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"About Us"}
            />
            <div className="about-page-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
            </div>
            <Team/>
            <CustomerFeedbacks/>
            <Footer/>
        </div>
    );
}

export default AboutPage;
 