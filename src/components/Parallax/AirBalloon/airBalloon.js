/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import AirBalloonLogo  from '../../../images/5a1ccf951a6881.1519408315118375891082.png';
 
 /**
  * Styles
  */
import './airBalloon.scss';
 
 /**
  * App component definition and export
  */
 export class AirBalloon extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
       this.state={
           slower: 0,
           faster: 0
       }
   }
   componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
 }

    handleScroll = () => {
        let scrollHeight = document.body.scrollTop
         this.setState({
             slower: scrollHeight/2,
             slower2x: scrollHeight/10
         })
    }
    renderImage = () => {
        if(this.props.left){
           return(
                <img 
                    src={AirBalloonLogo}
                    style={{transform: `translate(0px, -${this.state.slower}px)`}}
                />
           )}else{
            return(
                <img 
                src={AirBalloonLogo}
                style={{transform: `translate(0px, -${this.state.slower2x}px)`}}
            />
           ) }
        
    }
    
 

    render(){
       return(
            <div className={this.props.left ? "leftAirBallon": "rightAirBallon"}>
                {this.renderImage()}
            </div>
       );
    }
 }
 
 export default AirBalloon;
 