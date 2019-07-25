/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import Page1 from './Page1/page1';

/**
 * Styles
 */

import './welcomePage.scss';

/**
 * WelcomePage component definition and export
 */

class Login extends Component {

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
               <Page1/>
            </div>
        );
    }
}

export default Login;
