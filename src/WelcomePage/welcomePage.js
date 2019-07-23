/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import Headline from './Headline/headline';
import XLogo from './X/xLogo';

/**
 * Styles
 */

import './welcomePage.scss';

/**
 * WelcomePage component definition and export
 */

class WelcomePage extends Component {

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
            <div className="main">
                <div className="backgroundBox">
                <Headline/>
                <XLogo left/>
                </div>
            </div>
        );
    }
}

export default WelcomePage;
