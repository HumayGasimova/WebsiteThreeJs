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

         <div className="text">
            <h1>Text</h1>
            <div>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <br/>
         </div>

         <div className="parallax-backgroundBox2">
            <div className="text">
               <h1>Text</h1>
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>
               <Unicorn left/>
               <Unicorn />
            </div>
         </div>
            <ImagesPage/>
      </div>
   );
}

export default Parallax;
