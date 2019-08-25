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
import Page3 from './Page3/page3';
import Page4 from './Page4/page4';
import Page5 from './Page5/page5';
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
   renderForm = () => {
       if(!this.props.isAuthenticated){
            if(this.props.isSignUp === null && !this.props.loading) return;
            if(this.props.isSignUp && !this.props.loading){
                return (
                    <SignUp onClick={this.switch}/>
                )
            }
            if(!this.props.isSignUp && !this.props.loading){
                return (
                    <Login onClick={this.switch}/>
                )
            }
        if(this.props.loading){
            return (
                    <Spinner/>
            )
        }
       }
   }

    render(){
        return(
            <div className="welcomePage">
               <Page1/>
               <Page2 
                    newUser={this.props.newUser}
                    isAuth={this.props.isAuthenticated}
                    user={this.props.userName}
                    userId={this.props.userId}
                    />
               {/* <NavLink className="startGame" to={{ pathname: '/tictactoe'}}>Start Game</NavLink> */}
               <Page3/>
               <Backdrop 
                    show={this.props.isSignUp !== null && !this.props.isAuthenticated}
                    onClick={() => this.props.newUser(null)}/>
               {this.renderForm()}
               <Page4 
                    isAuth={this.props.isAuthenticated}
                    logout={this.props.logout}
                />
                <Page5/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
           isSignUp: state.auth.isSignUp,
           loading: state.auth.loading,
           isAuthenticated: state.auth.token !== null,
           userName: state.auth.name,
           userId: state.auth.userId
        };
     },
    (dispatch) => {
       return {
        newUser: bindActionCreators(Actions.userSignUp, dispatch),
        logout: bindActionCreators(Actions.logout, dispatch)
       };
    }
 )(WelcomePage);
