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
    Route,
    Switch,
    Redirect
 } from 'react-router-dom';
 
 /**
 * Components
 */
 
 
 /**
 * Components
 */
 
 import { fetchWhiskies } from '../../actions/exEpic';
 import ExampleGrid from '../exampleGrid/exampleGrid';
 /**
 * App component definition and export
 */
 
 export class Epic extends Component {
    render() {
   
       return (
         <div className="App">
           <button onClick={this.props.fetchWhiskies}>Fetch whiskies</button>
           {this.props.isLoading && <h1>Fetching data</h1>}
           {!this.props.isLoading && !this.props.error && <ExampleGrid whiskies={this.props.whiskies} />}
           {this.props.error && <h1>{this.props.error}</h1>}
         </div>
       );
     }
 }
 
 export default connect(
    (state) => {
        return {
          isLoading:state.epic.isLoading,
          error:state.epic.error,
          whiskies: state.epic.whiskies
        };
    },
    (dispatch) => {
        return {
          fetchWhiskies: bindActionCreators(fetchWhiskies, dispatch),
       
        };
    }
 )(Epic);
 