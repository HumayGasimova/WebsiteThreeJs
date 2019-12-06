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
import ImagesPage from './ImagePage/imagesPage';

import Services from '../Parts/Services/services';
import TeamInformation from '../Parts/TeamInformation/teamInformation';
import Gallery from '../Parts/Gallery/gallery';
import Feedback from '../Parts/Feedback/feedback';

/**
* Styles
*/

import './parallax.scss';

/**
* Parallax component definition and export
*/

export const Parallax = () => {

   /**
   * Mark up
   */

   return(
      <div className="parallax">
         <div className="parallax-backgroundBox">
            <HeaderText/>
            <div className="parallax-airbaloons">
               <AirBalloon left/>
               <AirBalloon />
            </div>
         </div>
         <Services/>
         <div className="parallax-backgroundBox2">
            <TeamInformation/>
            <Unicorn left/>
            <Unicorn />
         </div>
         <Gallery/>
         <div className="parallax-backgroundBox3">
            <Feedback/>
         </div>
            {/* <ImagesPage/> */}
      </div>
   );
}

export default Parallax;
