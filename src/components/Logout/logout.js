/**
 * Libraries
 */

import React,{
    Component,
    Suspense
 } from 'react';
 
import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    Redirect
} from 'react-router-dom';


 /**
  * Components
  */
 
/**
 * Actions
 */

import * as Actions from '../../actions';
 
 /**
  * Styles
  */
 
import './logout.scss';

  /**
  * Constants
  */


  /**
  * Actions
  */
 

 /**
  * Home component definition and export
  */

 export class Logout extends Component {

   componentDidMount () {
       this.props.onLogout();
   }
 
    /**
     * Markup
     */
 
    render(){
       return <Redirect to="/" />
    }
 }
 
 /**
  * Prop types
  */
 export default connect(
   (state) => {
       return {
         isAuthenticated: state.auth.token !== null
       };
    },
   (dispatch) => {
      return {
         onLogout: bindActionCreators(Actions.logout, dispatch)
      };
   }
)(Logout);