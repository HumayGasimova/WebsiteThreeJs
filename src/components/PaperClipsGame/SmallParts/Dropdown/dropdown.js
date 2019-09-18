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

/**
* Components
*/

/**
* Styles
*/

import './dropdown.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Grid component definition and export
*/

class Dropdown extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */
    
   renderDropdown = () => {
       return(
           <div className="dropdown-bottom">
               {this.props.list.map(el => {
                   return(
                        <div>
                            {el}
                        </div>
                   )
               })}
           </div>
       )
   }

    /**
    * Markup
    */

    render(){
        return(
            <div className="dropdown">
                <div className="dropdown-top">
                    <div></div>
                </div>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // ops: state.business.ops,
            // creativity: state.business.creativity,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            // checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Dropdown);
