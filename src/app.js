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
import Cube from './components/Cube/cube';
import EquirectangularMap from './components/EquirectangularMap/equirectangularMap';
import TransparentCubes from './components/Transparency/transparentCubes';
import TransparentPlanes from './components/Transparency/transparentPlanes';


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
               component={ TransparentPlanes }
            />
         </div>
      );
   }
}

export default App;
