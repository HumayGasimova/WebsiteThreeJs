/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import X from '../../XO/x';
 
 /**
  * Styles
  */
import './xLogo.scss';
 
 /**
  * App component definition and export
  */
 export class XLogo extends Component {
 
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
             slower2x: scrollHeight/7
         })
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }

    renderImage = () => {
        if(this.props.left){
           return(
            <div style={{transform: `translate(0px, -${this.state.slower2x}px)`}}>
                <X 
                    screen={this.props.screen}
                    opacity={"0.9"}
                />
            </div>
           )}else{
               if(this.props.center){
                    return(
                        <div  style={{transform: `translate(0px, ${this.state.slower2x}px)`}}>
                            <X 
                                screen={this.props.screen}
                                centerX
                                opacity={"0.5"}
                            />
                        </div>
                    )
               }else{
                    return(
                        <div  style={{transform: `translate(0px, ${this.state.slower}px)`}}>
                            <X screen={this.props.screen}/>
                        </div>
                    )
               }
            }
        
    }
 

    render(){
       return(
            <div className={this.props.left ? "leftX": this.props.center ? "centerX" : "rightX"}>
               {this.renderImage()}
            </div>
       );
    }
 }
 
 export default XLogo;
 