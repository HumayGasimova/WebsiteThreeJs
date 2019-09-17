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

import Button from '../../../../library/Button/button';

/**
* Styles
*/

import './investments.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* General component definition and export
*/

class Investments extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            
        }
    }

    /**
     * Methods
     */

    
    /**
    * Markup
    */

    render(){
        return(
            <div className="investments">
    
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // paperClips: state.business.paperClips,
            // funds: state.business.funds,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay,
            // wire: state.business.wire,
            // makePaperclipDisabled: state.business.makePaperclipDisabled
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Investments);
