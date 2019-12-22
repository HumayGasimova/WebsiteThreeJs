/**
* Libraries
*/

import React from 'react';
 
/**
* Components
*/

import StarsLogo  from '../../../images/bright-star-clipart-11.png';

/**
* Styles
*/

import './stars.scss';

/**
* Stars component definition and export
*/

export const Stars = (props) =>{
 
   /**
   * Mark up
   */
 
   return(
      <div className={props.className}>
         <img 
            src={StarsLogo}
         />
      </div>
   );
}

export default Stars;
 