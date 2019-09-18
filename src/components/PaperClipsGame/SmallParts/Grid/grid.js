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

import './grid.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Grid component definition and export
*/

class Grid extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */
    
    /**
    * Markup
    */

    render(){
        return(
            <button 
                onClick={this.props.onClick} 
                className={this.props.valid ? "card" : "card-invalid"}
                disabled={!this.props.valid}
            >
                {this.props.children}
            </button>
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
)(Grid);
