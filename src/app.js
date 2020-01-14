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

import MovingBubbles from './components/Parts/MovingBubbles/movingBubbles';
import Main from './components/main';

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
               path="/contact"
               // component={  }
            />
            <Route 
               exact
               path="/blog"
               // component={  }
            />
            <Route 
               exact 
               path="/porfolio"
               // component={  }
            />
            <Route 
               exact
               path="/services"
               // component={  }
            />
            <Route 
               exact 
               path="/about"
               // component={  }
            />
            <Route 
               exact
               path="/"
               component={ Main }
            />
         </div>
      );
   }
}

export default App;
