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
                </div>
            </div>
        );
    }
}

export default WelcomePage;
