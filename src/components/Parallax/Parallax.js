/**
* Libraries
*/

import React from 'react';

/**
* Components
*/

import HeaderText from './Text/HeaderText/headerText';
import Unicorn from './Unicorn/unicorn';
import AirBalloon from './AirBalloon/airBalloon';
import Services from '../Parts/Services/services';
import TeamInformation from '../Parts/TeamInformation/teamInformation';
import Gallery from '../Parts/Gallery/gallery';
import Feedback from '../Parts/Feedback/feedback';
import ContactInfo from '../Parts/ContactInfo/contactInfo';
import Footer from '../Parts/Footer/footer';

/**
* Styles
*/

import './parallax.scss';

/**
* Constants
*/

import * as Icon from '../../constants/iconNames';

/**
* Parallax component definition and export
*/

export const Parallax = () => {

   /**
   * Mark up
   */

   return(
      <div className="parallax" id={Icon.HOME}>
         <div className="parallax-backgroundBox">
            <HeaderText/>
            <div className="parallax-airbaloons">
               <AirBalloon left/>
               <AirBalloon />
            </div>
         </div>
         <Services/>
         <div id={Icon.ABOUT} className="parallax-backgroundBox2">
            <TeamInformation/>
            <Unicorn left/>
            <Unicorn />
         </div>
         <Gallery/>
         <div className="parallax-backgroundBox3">
            <Feedback/>
         </div>
         <ContactInfo/>
         <Footer/>
      </div>
   );
}

export default Parallax;
