/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    Link
 } from 'react-router-dom';

/**
 * Components
 */


/**
 * Styles
 */

import './buttonImage.scss';

/**
 * WelcomePage component definition and export
 */

class ButtonImage extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
    }
    
    /**
    * Markup
    */

    renderText = () => {
        return(
            <div className="textUnderButtonImages">
                {this.props.text}
            </div>
        )
    }

    render(){
        return(
            <div className="buttonImage">
               <Link to={this.props.pathname}>
                     {this.props.children}
                </Link>
              {this.renderText()}
            </div>
        );
    }
}

export default ButtonImage;
