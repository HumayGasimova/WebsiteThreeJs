/**
 * Libraries
 */

import React,{
   Component
} from 'react';

/**
 * Components
 */
import HeaderText from './Text/HeaderText/headerText';
import Stars from './Stars/stars';
import Unicorn from './Unicorn/unicorn';
import AirBalloon from './AirBalloon/airBalloon';
import ImagesPage from './ImagePage/imagesPage';

/**
 * Styles
 */

import './parallax.scss';



/**
 * App component definition and export
 */
export class Parallax extends Component {

   /**
   * Constructor
   */

   constructor(props) {
      super(props);
      
   }

   render(){
      return(
         <div className="main">
            <div className="backgroundBox">
               <div className="toolbar2"></div>
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

            <div className="backgroundBox2">
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
}

export default Parallax;
