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
            // cards: state.business.cards,
            // funds: state.business.funds,
            // unsoldInventory: state.business.unsoldInventory,
            //    paperclipPrice: Selectors.getPaperclipPriceState(state),
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Hover);
