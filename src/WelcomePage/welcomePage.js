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
               <NavLink className="startGame" to={{ pathname: '/tictactoe'}}>Start Game</NavLink>
            </div>
        );
    }
}

export default WelcomePage;
