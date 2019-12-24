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

import Tutorial from './components/Tutorial/tutorial';

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
               component={ Tutorial }
            />
         </div>
      );
   }
}

export default App;
