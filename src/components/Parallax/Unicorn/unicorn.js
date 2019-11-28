/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import UnicornLogo  from '../../../images/pink-unicorn-silhouette-png-18.png';
 
 /**
  * Styles
  */
import './unicorn.scss';
 
 /**
  * App component definition and export
  */
 export class Unicorn extends Component {
 
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
             slower2x: scrollHeight/8
         })
    }
    renderImage = () => {
        if(this.props.left){
           return(
                <img 
                    src={UnicornLogo}
                    style={{transform: `translate(0px, ${this.state.slower}%)`}}
                />
           )}else{
            return(
                <img 
                src={UnicornLogo}
                style={{transform: `translate(0px, ${this.state.slower}px)`}}
            />
           ) }
        
    }
    
 

    render(){
       return(
            <div className={this.props.left ? "leftUnicorn": "rightUnicorn"}>
                {this.renderImage()}
            </div>
       );
    }
 }
 
 export default Unicorn;
 