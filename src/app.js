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

import Home from './components/Home/home';
import Service1 from './components/Parts/Services/Service1/service1';

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
               path="/service1"
               component={ Service1 }
            />
            <Route 
               exact 
               path="/"
               component={ Home }
            />
            
            {/* <Route 
               exact 
               path="/"
               component={ Home }
            />
            <Route 
               exact 
               path="/"
               component={ Home }
            />
            <Route 
               exact 
               path="/"
               component={ Home }
            /> */}
         </div>
      );
   }
}

export default App;
