/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    NavLink
 } from 'react-router-dom';

/**
 * Components
 */

import Page1 from './Page1/page1';
import Page2 from './Page2/page2';
import SignUp from './SignUp/signUp';
import Spinner from '../Spinner/spinner';
import Login from '../WelcomePage/Login/login';

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
            <div className="welcomePage">
               <Page1/>
               {/* <NavLink className="startGame" to={{ pathname: '/tictactoe'}}>Start Game</NavLink> */}
               <Page2/>
               {/* <SignUp/> */}
               {/* <Spinner/> */}
               <Login/>
            </div>
        );
    }
}

export default WelcomePage;
