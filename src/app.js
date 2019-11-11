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
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/**
* Components
*/

import PaperClipsGame from './components/PaperClipsGame/paperClipsGame';

/**
* Components
*/

import './app.scss';

/**
* App component definition and export
*/

export class App extends Component {
  
   /**
   * Methods
   */

   // renderRoutes = () => {
   //     if(this.props.isAuthenticated){
   //         return(
   //             <div>
   //                 <Switch>
   //                     <Route 
   //                         path="/tictactoe"
   //                         component={ App3x3 }
   //                     />
   //                     <Route 
   //                         path="/tictactoe4x4"
   //                         component={ App4x4 }// render={props => <App4x4 {...props}/>}
   //                     />
   //                     <Route 
   //                         exact 
   //                         path="/"
   //                         component={ Welcome }
   //                     />
   //                     <Redirect to="/"/>
   //                 </Switch>
   //             </div>
   //         );
   //     }else{
   //         return(
   //             <div>
   //                 <Switch>
   //                     <Route 
   //                         exact 
   //                         path="/"
   //                         component={ Welcome }
   //                         />
   //                     <Redirect to="/"/>
   //                 </Switch>
   //             </div>
   //         );
   //     }
   // }

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
               {/* <Epic/> */}
            </div>
      );
   }
}

export default connect(
   (state) => {
      return {
         //   isAuthenticated: state.auth.token !== null
      };
   }
)(App);
