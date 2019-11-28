/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import StarsLogo  from '../../../images/bright-star-clipart-11.png';
 
 /**
  * Styles
  */
import './stars.scss';
 
 /**
  * App component definition and export
  */
 export class Stars extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
       this.state={
           slower: 0
       }
   }
//    componentDidMount = () => {
//     window.addEventListener('scroll', this.handleScroll)
//  }

//     handleScroll = () => {
//         let scrollHeight = document.body.scrollTop
//          this.setState({
//              slower: scrollHeight/2
//          })
//     }
 
    render(){
       return(
            <div className={this.props.left ? "starsLeft" : "starsRight"}>
               <img 
                    src={StarsLogo}
                    // style={{transform: `translate(0px, ${this.state.slower}px)`}}
                    />
            </div>
       );
    }
 }
 
 export default Stars;
 