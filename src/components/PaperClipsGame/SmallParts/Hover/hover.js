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

import './hover.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Card component definition and export
*/

export class Hover extends Component {

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
            <div className="hoverComponent">
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // cards: Selectors.getCardsState(state),
            // funds: state.business.funds,
            // unsoldInventory: Selectors.getUnsoldInventoryState(state),
            // paperclipPrice: Selectors.getPaperclipPriceState(state),
            // delay: Selectors.getDelayState(state),
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Hover);
