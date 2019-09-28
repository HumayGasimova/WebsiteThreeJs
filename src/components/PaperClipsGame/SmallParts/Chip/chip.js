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

import './chip.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Chip component definition and export
*/

class Chip extends Component {

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
            <div>
                {this.props.showChip ? <div className="chip"/> : null}
                {/* <div className="chip"/> */}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // ops: state.business.ops,
            // creativity: state.business.creativity,
            // trust: state.business.trust,
            
        };
    },
    (dispatch) => {
        return {
            // checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Chip);
