/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    connect
 } from 'react-redux';

 import {
    bindActionCreators
 } from 'redux';

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
import Backdrop from '../../library/Backdrop/backdrop';

/**
 * Styles
 */

import './welcomePage.scss';

/**
 * Actions
 */

import * as Actions from '../../actions';

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
               <Backdrop 
                    show={this.props.isSignUp !== null}
                    onClick={() => this.props.newUser(null)}/>
               {this.props.isSignUp === null ? null : this.props.isSignUp ? <SignUp onClick={this.switch}/> : <Login onClick={this.switch}/>}
               {/* <Spinner/> */}
               {/* <Login/> */}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
           isSignUp: state.auth.isSignUp
        };
     },
    (dispatch) => {
       return {
        newUser: bindActionCreators(Actions.userSignUp, dispatch)
       };
    }
 )(WelcomePage);
