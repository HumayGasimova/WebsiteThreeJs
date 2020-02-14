/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './contactPage.scss';

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import SendMessage from '../../SmallParts/SendMessage/sendMessage';
import Footer from '../../Parts/Footer/footer';

/**
* ContactPage component definition and export
*/

export const ContactPage = () => {

    /**
    * Markup
    */

    return(
        <div className="contact-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Contact"}
            />
            <div className="contact-page-wrapper">
                <div className="contact-page-header">Contact Information</div>
                <div className="contact-page-wrapper2">
                    <div className="contact-page-info">Address: 25 West 27th Street, Suite 581  734716</div>
                    <div className="contact-page-info">Phone: + 0123456798</div>
                    <div className="contact-page-info">Email: info@yoursite.com</div>
                    <div className="contact-page-info">Website yoursite.com</div>
                </div>
                <div className="contact-page-wrapper3">
                    <SendMessage/>
                    <div className="contact-page-map"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactPage;
 