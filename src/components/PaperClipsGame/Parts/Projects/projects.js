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

import './projects.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Projects component definition and export
*/

class Projects extends Component {

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
            <div className="projects">
                <div className="projects-label">Projects</div>
                <div className="projects-line"/>
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
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Projects);
