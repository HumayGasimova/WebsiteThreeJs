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
            <div className="grid-row">
                <div className={this.props.className}>{this.props.stock}</div>
                <div className={this.props.className}>{this.props.amt}</div>
                <div className={this.props.className}>{this.props.price}</div>
                <div className={this.props.className}>{this.props.total}</div>
                <div className={this.props.className}>{this.props.profitLoss}</div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // ops: state.business.ops,
            // creativity: state.business.creativity,
            // unsoldInventory: Selectors.getUnsoldInventoryState(state),
            // paperclipPrice: Selectors.getPaperclipPriceState(state),
            // delay: Selectors.getDelayState(state),
        };
    },
    (dispatch) => {
        return {
            // checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Grid);
