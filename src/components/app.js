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
import store from '../store/store';

/**
 * Components
 */

/**
 * Styles
 */

import './app.scss';

/**
 * Actions
 */

import * as Actions from '../actions';

/**
 * App component definition and export
 */

export class App extends Component {

   /**
    * Constructor
    */

   constructor(props){
      super(props);
      this.state = {
      } 
   }
  
   /**
    * Methods
    */

   /**
    * Markup
    */

   render(){
      return(
            <div>
               hey
            </div>
      );
   }
}

/**
 * Prop types
 */

 
export default connect(
   (state) => {
      return {
         // firstPlayer: state.setPlayer.firstPlayer,
        
      };
   },
   (dispatch) => {
      return {
         // setXPlayer: bindActionCreators(Actions.setXPlayer, dispatch),
      };
   }
)(App);

