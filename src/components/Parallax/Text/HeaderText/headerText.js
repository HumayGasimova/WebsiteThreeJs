/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */

 
 /**
  * Styles
  */
 
import './headerText.scss';
 
 /**
  * App component definition and export
  */
 export class headerText extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
       this.state={
         slower: 0
     }
   }
   componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
   }
  
   handleScroll = () => {
         let scrollHeight = document.body.scrollTop
         this.setState({
            slower: scrollHeight/2
         })
   }
 
    render(){
       return(
            <div className="headerText">
               <div  style={{transform: `translate(0px, ${this.state.slower}px)`}}>
                  <svg height="100%" width="100%"
                     >
                     <text x="50%" y="50%" fill="rgb(136, 0, 101)" textAnchor="middle">Welcome</text>
                  </svg>
               </div>
            </div>
       );
    }
 }
 
 export default headerText;
 