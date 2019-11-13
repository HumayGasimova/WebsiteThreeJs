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

import PaperClipsGame from './components/PaperClipsGame/paperClipsGame';

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
                  component={ PaperClipsGame }
               />
            </div>
      );
   }
}

export default App;
