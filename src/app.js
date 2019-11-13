/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import Canvas from './components/Canvas/canvas';

/**
* Styles
*/

import './app.scss';

/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
            <div className="app">
               <Route 
                  exact 
                  path="/"
                  component={ Canvas }
               />
            </div>
      );
   }
}

export default App;
