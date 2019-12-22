/**
* Libraries
*/

import React,{
   useState,
   useEffect
} from 'react';

/**
* Styles
*/
 
import './headerText.scss';
 
/**
* HeaderText component definition and export
*/

export const HeaderText = (props) => {

   /**
   * State
   */
 
   const [slower, setSlower] = useState(0);

   /**
   * Methods
   */

   const handleScroll = () => {
      let scrollHeight = document.body.scrollTop;
      setSlower(scrollHeight/2);
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
  
   return(
      <div className="headerText">
         <div style={{transform: `translate(0px, ${slower}px)`}}>
            <svg height="100%" width="100%">
               <text x="50%" y="50%" fill="rgb(136, 0, 101)" textAnchor="middle">Welcome</text>
            </svg>
         </div>
      </div>
   );
}

export default HeaderText;
 