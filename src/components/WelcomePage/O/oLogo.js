/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import O from '../../XO/o';
 
 /**
  * Styles
  */
import './oLogo.scss';
 
 /**
  * App component definition and export
  */
 export class OLogo extends Component {
 
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

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }

    renderImage = () => {
        if(this.props.left){
           return(
            <div style={{transform: `translate(0px, ${this.state.slower}px)`}}>
                <O
                    radius={this.props.radius}
                    width={this.props.widths}
                    height={this.props.height}
                    strokeWidth={this.props.strokeWidth}
                    cx={this.props.cx}
                    cy={this.props.cy}
                    screen={this.props.screen}
                />
            </div>
           )}else{
               if(this.props.center){
                return(
                    <div  style={{transform: `translate(0px, ${this.state.slower}px)`}}>
                        <O 
                            radius={this.props.radius}
                            width={this.props.widths}
                            height={this.props.height}
                            strokeWidth={this.props.strokeWidth}
                            cx={this.props.cx}
                            cy={this.props.cy}
                            screen={this.props.screen}
                            opacity={"0.4"}
                        />
                    </div>
                ) 
               }else{
                    return(
                        <div  style={{transform: `translate(0px, -${this.state.slower}px)`}}>
                            <O 
                                radius={this.props.radius}
                                width={this.props.widths}
                                height={this.props.height}
                                strokeWidth={this.props.strokeWidth}
                                cx={this.props.cx}
                                cy={this.props.cy}
                                screen={this.props.screen}
                                opacity={"0.8"}
                            />
                        </div>
                    ) 
               }
           }
        
    }
    
 

    render(){
       return(
            <div className={this.props.left ? "leftO": this.props.center ? "centerO" : "rightO"}>
               {this.renderImage()}
            </div>
       );
    }
 }
 
 export default OLogo;
 