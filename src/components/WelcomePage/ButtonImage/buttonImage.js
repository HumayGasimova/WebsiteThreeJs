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

    render(){
        return(
            <div className="buttonImage">
              {this.props.children}
            </div>
        );
    }
}

export default ButtonImage;
